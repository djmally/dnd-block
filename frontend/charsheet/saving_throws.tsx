import React from 'react';
import {Box, Text, Heading, useBase, useRecords} from '@airtable/blocks/ui';
import {Checkbox} from './checkbox';
import {RollableGridBox} from '../ui/rollable_grid_box';
import {abilityScoreBoxHeight} from './ability_scores';

export function SavingThrows() {
    const base = useBase();
    const savingThrowsTable = base.getTableByName('Saving Throws');
    const queryResult = savingThrowsTable.selectRecords();
    const records = useRecords(queryResult);
    return (
        <Box display="flex" flexWrap="wrap" flexDirection="column" height={abilityScoreBoxHeight} className="saves" style={{padding: 4, border: '3px solid #ddd'}}>
            <Heading>Saving Throws</Heading>
            {records.map(record => {
                const saveBonus = record.primaryCellValue as number;
                const abilityScore = record.getCellValueAsString('Ability Score');
                const isProficient = record.getCellValueAsString('Proficient');
                return (
                    <RollableGridBox key={record.id} modifier={saveBonus} description={`${abilityScore} Save`}>
                        <Text>{abilityScore}</Text>
                        <Text>{saveBonus >= 0 ? `+${saveBonus}` : saveBonus}</Text>
                        <Checkbox name={`${abilityScore}-save-prof`} isSelected={isProficient === 'checked'} mutationHook={async isChecked => await savingThrowsTable.updateRecordAsync(record.id, {'Proficient': isChecked})}/>
                    </RollableGridBox>
                );
            })}
        </Box>
    );
}
