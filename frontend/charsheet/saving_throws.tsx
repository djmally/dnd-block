import React from 'react';
import {UI} from '@airtable/blocks';
import Checkbox from '../checkbox';

function renderSavingThrows(base) {
    const savingThrowsTable = base.getTableByName('Saving Throws');
    const queryResult = savingThrowsTable.selectRecords();
    const records = UI.useRecords(queryResult);
    return (
        <>
        <ul>
            {records.map(record => {
                const bonus = record.primaryCellValueAsString || '';
                const abilityScore = record.getCellValueAsString('Ability Score');
                const isProficient = record.getCellValueAsString('Proficient');
                return (
                    <li key={record.id}>
                        <label htmlFor={`${abilityScore}-save`}>{abilityScore}</label>
                        <div className="save" name={`${abilityScore}-save`}>{bonus}</div>
                        <Checkbox name={`${abilityScore}-save-prof`} isSelected={isProficient === 'checked'} onCheckboxChange={() => {false}}/>
                    </li>
                );
            })}
            </ul>
            <div className="label">
                Saving Throws
            </div>
        </>
    );
}

export default renderSavingThrows;
