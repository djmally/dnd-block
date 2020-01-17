import React from 'react';
import {Box, Heading, Text, useRecords, useBase} from '@airtable/blocks/ui';
import {Checkbox} from './checkbox';
import {RollableGridBox, boxMargin, boxMinHeight} from '../ui/rollable_grid_box';
import {abilityScoreBoxHeight} from './ability_scores';

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
            <RollableGridBox key={record.id} style={{padding: 4}} modifier={modifier} description={skill}>
                <Text>{skill}</Text>
                <Text>{parseInt(skillBonus) >= 0 ? `+${skillBonus}` : skillBonus}</Text>
                <Text>{`(${skillBonusStat})`}</Text>
                <Checkbox name={`${skill}-prof`} isSelected={isProficient === 'checked'} mutationHook={async isChecked => await skillsTable.updateRecordAsync(record.id, {'Proficient': isChecked})}/>
            </RollableGridBox>
        );
    });

    return (
        <Box display="flex" flexWrap="wrap" flexDirection="row" height={abilityScoreBoxHeight} className="skills" style={{padding: 4, border: '3px solid #ddd'}}>
            <Heading style={{height: 50, width: 'fill', borderTop: '3px solid #ddd', borderBottom: '3px solid #ddd'}}>Skills</Heading>
            <Box display="flex" flexWrap="wrap" flexDirection="row" maxWidth={800}>
                {skillList}
            </Box>
        </Box>
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
