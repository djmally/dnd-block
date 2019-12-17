import React from 'react';
import {Box, Heading, Text, useRecords, useBase} from '@airtable/blocks/ui';
import Checkbox from './checkbox';
import {Rollable} from './rollable';

export function Skills() {
    const base = useBase();
    const skillsTable = base.getTableByName('Skills');
    const queryResult = skillsTable.selectRecords();
    const records = useRecords(queryResult);
    const skillList = records.map(record => {
        const skill = record.primaryCellValueAsString || '';
        const skillBonusStat = record.getCellValueAsString('Bonus Stat');
        const skillBonus = record.getCellValueAsString('Bonus');
        const isProficient = record.getCellValueAsString('Proficient');
        const modifier = parseInt(skillBonus) || 0;
        return (
            <Rollable key={record.id} style={{padding: 4}} modifier={modifier}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width="70px"
                height="70px"
                backgroundColor="blueLight2"
                style={{borderRadius: "10px"}}
            >
                <div style={{display: 'flex'}}>{skill}</div>
                <div style={{display: 'flex'}}>{parseInt(skillBonus) >= 0 ? `+${skillBonus}` : skillBonus}</div>
                <div style={{display: 'flex'}}>{skillBonusStat}</div>
            </Box>
            <Checkbox name={`${skill}-prof`} isSelected={isProficient === 'checked'} mutationHook={async isChecked => await skillsTable.updateRecordAsync(record.id, {'Proficient': isChecked})}/>
            </Rollable>
        );
    });

    return (
        <div className="skills" style={{padding: 4, border: '3px solid #ddd', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '400px', maxHeight: '490px'}}>
            <Heading>Skills</Heading>
            {skillList}
        </div>
    );
}

export function PassivePerception() {
    const base = useBase();
    const proficiency = parseInt(useRecords(base.getTableByName('Proficiency').selectRecords())[0].primaryCellValueAsString || '0');

    const abilityScoresTable = base.getTableByName('Ability Scores');
    const queryResult = abilityScoresTable.selectRecords();
    const records = useRecords(queryResult);
    const wisdomRecord = records.filter(record => {
        const abilityScore = record.primaryCellValueAsString || '';
        return abilityScore === 'Wisdom';
    })[0];

    const wisdomBonus = parseInt(wisdomRecord.getCellValueAsString('Bonus'));

    return (
        <>
        <Heading>Passive Wisdom (Perception)</Heading>
        <Text>{10 + wisdomBonus + proficiency}</Text>
        </>
    );
}
