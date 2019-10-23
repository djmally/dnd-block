import React from 'react';
import {UI} from '@airtable/blocks';

function _renderClassLevels(base) {
    const classesTable = base.getTableByName('Classes');
    const queryResult = classesTable.selectRecords();
    const records = UI.useRecords(queryResult);
    return (
        <>
        <label htmlFor="classlevel">Classes</label>
        {records.map(record => {
            const className = record.primaryCellValueAsString || '';
            const classLevels = record.getCellValueAsString('Levels');
            const subclass = record.getCellValueAsString('Subclass');
            const classFeatures = record.getCellValueAsString('Class Features');
            return (
                <li key={record.id}>
                    <div className="classlevel" name="classlevel">{className} ({subclass}) {classLevels}</div>
                </li>
            );
        })}
        </>
    );
}

function renderCharacterDetails(base) {
    const characterName = UI.useRecords(base.getTableByName('Player Details').selectRecords())[0].getCellValueAsString('Name');
    return (
        <>
        <section className="charname">
        <label htmlFor="charname">Character Name</label><div className="charname" name="charname">{characterName}</div>
        </section>
        <section className="misc">
            <ul>
                {_renderClassLevels(base)}
            </ul>
        </section>
        </>
    );
}

export default renderCharacterDetails;