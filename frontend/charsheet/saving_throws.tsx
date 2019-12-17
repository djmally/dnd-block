import React from 'react';
import {Box, Heading, useBase, useRecords} from '@airtable/blocks/ui';
import Checkbox from './checkbox';
import {Rollable} from './rollable';

export function SavingThrows() {
    const base = useBase();
    const savingThrowsTable = base.getTableByName('Saving Throws');
    const queryResult = savingThrowsTable.selectRecords();
    const records = useRecords(queryResult);
    return (
        <div style={{padding: 4, border: '3px solid #ddd', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '400px', maxHeight: '490px'}}>
            <Heading>Saving Throws</Heading>
            {records.map(record => {
                const saveBonus = record.primaryCellValue as number;
                const abilityScore = record.getCellValueAsString('Ability Score');
                const isProficient = record.getCellValueAsString('Proficient');
                return (
                    <Rollable key={record.id} modifier={saveBonus}>
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
                        <div style={{display: 'flex'}}>{abilityScore}</div>
                        <div style={{display: 'flex'}}>{saveBonus >= 0 ? `+${saveBonus}` : saveBonus}</div>
                        <Checkbox name={`${abilityScore}-save-prof`} isSelected={isProficient === 'checked'} mutationHook={async isChecked => await savingThrowsTable.updateRecordAsync(record.id, {'Proficient': isChecked})}/>
                    </Box>
                    </Rollable>
                );
            })}
        </div>
    );
}
