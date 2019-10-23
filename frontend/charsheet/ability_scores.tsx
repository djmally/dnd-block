import React from 'react';
import {UI} from '@airtable/blocks';

function renderAbilityScores(base) {
    const abilityScoresTable = base.getTableByName('Ability Scores');
    const queryResult = abilityScoresTable.selectRecords();
    const records = UI.useRecords(queryResult);
    const abilityScoreList = records.map(record => {
        const abilityScore = record.primaryCellValueAsString || '';
        const htmlFor = `${abilityScore}score`;
        const stat = record.getCellValueAsString('Stat');
        const statBonus = record.getCellValueAsString('Bonus');
        return (
            <li key={record.id}>
                <div className="score">
                    <label htmlFor={htmlFor}>{abilityScore}</label><div className="stat" name={htmlFor}>{stat}</div>
                </div>
                <div className="modifier">
                    <div className="modifier" name="{abilityScore}mod">{statBonus}</div>
                </div>
            </li>
        );
    });

    return (
        <div className="scores">
            <ul>
                {abilityScoreList}
            </ul>
        </div>
    );
}

export default renderAbilityScores;