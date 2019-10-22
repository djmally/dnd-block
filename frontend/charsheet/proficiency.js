import React from 'react';
import {UI} from '@airtable/blocks';

function renderProficiency(base) {
    const proficiency = parseInt(UI.useRecords(base.getTableByName('Proficiency').selectRecords())[0].primaryCellValueAsString || '0');
    const renderedProficiency = proficiency > -1 ? '+' + proficiency.toString() : proficiency.toString();
    return (
        <div className="proficiencybonus box">
            <div class="label-container">
                <label htmlFor="proficiencybonus">Proficiency Bonus</label>
            </div>
            <div className="proficiencybonus" name="proficiencybonus">{renderedProficiency}</div>
        </div>
    );
}

module.exports = renderProficiency;