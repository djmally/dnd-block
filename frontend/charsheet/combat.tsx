import React from 'react';
import {UI} from '@airtable/blocks';
import Checkbox from '../checkbox';

function renderArmorClass(base) {
    const acTable = base.getTableByName('AC');
    const queryResult = acTable.selectRecords();
    const acRecord = UI.useRecords(queryResult)[0];
    const ac = acRecord.primaryCellValueAsString || '';
    return (
        <div className="armorclass">
            <div>
                <label htmlFor="ac">Armor Class</label><input name="ac" placeholder={ac} type="text" />
            </div>
        </div>
    );
}

function renderInitiative(base) {
    const abilityScoresTable = base.getTableByName('Ability Scores');
    const queryResult = abilityScoresTable.selectRecords();
    const records = UI.useRecords(queryResult);
    const dexterityRecord = records.filter(record => {
        const abilityScore = record.primaryCellValueAsString || '';
        return abilityScore === 'Dexterity';
    })[0];

    const dexterityBonus = parseInt(dexterityRecord.getCellValueAsString('Bonus'));

    return (
        <div className="initiative">
            <div>
                <label htmlFor="initiative">Initiative</label>
                <div name="initiative">
                    {dexterityBonus} 
                </div>
            </div>
        </div>
    );
}

function renderSpeed(base) {
    // FIXME:
    return (
        <div className="speed">
            <div>
            <label htmlFor="speed">Speed</label><input name="speed" placeholder="30" type="text" />
            </div>
        </div>
    );
}

function renderHitPoints(base) {
    return (
        <div className="hp">
            <div className="regular">
            <div className="max">
                <label htmlFor="maxhp">Hit Point Maximum</label><input name="maxhp" placeholder="10" type="text" />
            </div>
            <div className="current">
                <label htmlFor="currenthp">Current Hit Points</label><input name="currenthp" type="text" />
            </div>
            </div>
            <div className="temporary">
            <label htmlFor="temphp">Temporary Hit Points</label><input name="temphp" type="text" />
            </div>
        </div>
    );
}

function renderHitDice(base) {
    return (
        <div className="hitdice">
          <div>
            <div className="total">
              <label htmlFor="totalhd">Total</label><input name="totalhd" placeholder="2d10" type="text" />
            </div>
            <div className="remaining">
              <label htmlFor="remaininghd">Hit Dice</label><input name="remaininghd" type="text" />
            </div>
          </div>
        </div>
    );
}

function renderDeathSaves(base) {
    return (
        <div className="deathsaves">
            <div>
            <div className="label">
                <label>Death Saves</label>
            </div>
            <div className="marks">
                <div className="deathsuccesses">
                <label>Successes</label>
                <div className="bubbles">
                    {
                        [1, 2, 3].map(i => <Checkbox key={`deathsuccess${i}`} name={`deathsuccess${i}`} isSelected={false} onCheckboxChange={() => {false}}/>)
                    }
                </div>
                </div>
                <div className="deathfails">
                <label>Failures</label>
                <div className="bubbles">
                    {
                        [1, 2, 3].map(i => <Checkbox key={`deathfail${i}`} name={`deathfail${i}`} isSelected={false} onCheckboxChange={() => {false}}/>)
                    }
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default {renderArmorClass, renderInitiative, renderSpeed, renderHitPoints, renderHitDice, renderDeathSaves}