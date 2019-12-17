import React, {useState} from 'react';
import {Heading, Text, useRecords, useBase} from '@airtable/blocks/ui';
import {Checkbox} from './checkbox';

export function ArmorClass() {
    const base = useBase();
    const acTable = base.getTableByName('AC');
    const queryResult = acTable.selectRecords();
    const acRecord = useRecords(queryResult)[0];
    const ac = acRecord.primaryCellValueAsString || '';
    return (
        <div className="armorclass">
            <div>
                <label htmlFor="ac">Armor Class</label>
                {ac}
            </div>
        </div>
    );
}

export function Initiative() {
    const base = useBase();
    const abilityScoresTable = base.getTableByName('Ability Scores');
    const queryResult = abilityScoresTable.selectRecords();
    const records = useRecords(queryResult);
    const dexterityRecord = records.filter(record => {
        const abilityScore = record.primaryCellValueAsString || '';
        return abilityScore === 'Dexterity';
    })[0];

    const dexterityBonus = dexterityRecord.getCellValueAsString('Bonus');

    return (
        <>
        <Heading>Initiative</Heading>
        <Text>{dexterityBonus}</Text>
        </>
    );
}

export function Speed() {
    const base = useBase();
    const raceTable = base.getTableByName('Race');
    const queryResult = raceTable.selectRecords();
    const raceRecord = useRecords(queryResult)[0];
    const speed = raceRecord.getCellValueAsString('Speed') || '0'
    return (
        <>
        <Heading>Speed</Heading>
        <Text>{speed}</Text>
        </>
    );
}

export function HitPoints() {
    const base = useBase();
    const hpTable = base.getTableByName('HP');
    const queryResult = hpTable.selectRecords();
    const hpRecord = useRecords(queryResult)[0];
    const currentDamage = hpRecord.getCellValue('Damage') as number;
    const currentTemporaryHP = hpRecord.getCellValue('Temporary HP') as number;
    return (
        <>
        <Heading>Hit Points</Heading>
        <Text>{`${hpRecord.primaryCellValueAsString} / ${hpRecord.getCellValueAsString('Max HP')}`}</Text>
        <Text>Damage</Text>
        <input value={currentDamage} onChange={async event => {
            let damage = parseInt(event.target.value);
            if (isNaN(damage) || damage === Infinity || damage < 0) {
                damage = 0;
            }
            hpTable.updateRecordAsync(hpRecord.id, {'Damage': damage});
        }}/>
        <Text>Temporary HP</Text>
        <input value={currentTemporaryHP} onChange={async event => {
            const temporaryHP = parseInt(event.target.value);
            hpTable.updateRecordAsync(hpRecord.id, {'Temporary HP': temporaryHP});
        }}/>
        </>
    );
}

export function HitDice() {
    const base = useBase();
    // TODO: remaining HD
    const hpTable = base.getTableByName('HP');
    const queryResult = hpTable.selectRecords();
    const hpRecord = useRecords(queryResult)[0];
    return (
        <div className="hitdice">
          <div>
            <div className="total">
              <label htmlFor="totalhd">Total</label>
                {hpRecord.getCellValueAsString('Hit Dice')}
            </div>
            <div className="remaining">
              <label htmlFor="remaininghd">Hit Dice</label>
            </div>
          </div>
        </div>
    );
}

export function DeathSaves() {
    return (
        <>
            <Heading>Death Saves</Heading>
                <Heading size="small">Successes</Heading>
                    {[1, 2, 3].map(i => <Checkbox key={`deathsuccess${i}`} name={`deathsuccess${i}`} isSelected={false}/>)}
                <Heading size="small">Failures</Heading>
                    {[1, 2, 3].map(i => <Checkbox key={`deathfail${i}`} name={`deathfail${i}`} isSelected={false}/>)}
        </>
    );
}
