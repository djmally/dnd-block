import React from 'react';
import {UI} from '@airtable/blocks';
import Checkbox from '../checkbox';

function renderSkills(base) {
    const skillsTable = base.getTableByName('Skills');
    const queryResult = skillsTable.selectRecords();
    const records = UI.useRecords(queryResult);
    const skillList = records.map(record => {
        const skill = record.primaryCellValueAsString || '';
        const htmlFor = `${skill}skill`;
        const skillBonusStat = record.getCellValueAsString('Bonus Stat');
        const skillBonus = record.getCellValueAsString('Bonus');
        const isProficient = record.getCellValueAsString('Proficient');
        return (
            <li key={record.id}>
                <label htmlFor={htmlFor}>{skill}
                    <span className="skill">({skillBonusStat})</span>
                </label>
                <div className="skill" name={skill} type="text">{skillBonus}</div>
                <Checkbox name={`${skill}-prof`} isSelected={isProficient === 'checked'} onCheckboxChange={() => {false}}/>
            </li>
        );
    });

    return (
        <section className="skills">
        <ul>
            {skillList}
        </ul>
        </section>
    );
}

function renderPassivePerception(base) {
    const proficiency = parseInt(UI.useRecords(base.getTableByName('Proficiency').selectRecords())[0].primaryCellValueAsString || '0');

    const abilityScoresTable = base.getTableByName('Ability Scores');
    const queryResult = abilityScoresTable.selectRecords();
    const records = UI.useRecords(queryResult);
    const wisdomRecord = records.filter(record => {
        const abilityScore = record.primaryCellValueAsString || '';
        return abilityScore === 'Wisdom';
    })[0];

    const wisdomBonus = parseInt(wisdomRecord.getCellValueAsString('Bonus'));

    return (
        <div className="passive-perception">{10 + wisdomBonus + proficiency}</div>
    )
}

export default {renderSkills, renderPassivePerception};