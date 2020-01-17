import React, {useState} from 'react';
import {Box, Button, Heading, Text, Select, useRecords, useBase, expandRecordPickerAsync, useGlobalConfig} from '@airtable/blocks/ui';
import {Checkbox} from './checkbox';
import { Rollable } from '../ui/rollable';
import { SelectOption } from '@airtable/blocks/dist/types/src/ui/select_and_select_buttons_helpers';

const attackRollAbilityScoreGlobalConfigKey = 'attackRollAbilityScore';

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

export function AttackRoll() {
    const base = useBase();
    const globalConfig = useGlobalConfig()
    const storedAbilityScoreRecordId: string | null = globalConfig.get(attackRollAbilityScoreGlobalConfigKey) as string | null | undefined || null;
    const [abilityScoreRecordId, setAbilityScoreRecordId] = useState(storedAbilityScoreRecordId);

    const proficiencyBonus = parseInt(useRecords(base.getTableByName('Proficiency').selectRecords())[0].primaryCellValueAsString || '0');
    const formattedProficiencyBonus = proficiencyBonus > 0 ? ` + ${proficiencyBonus}` : ` - ${Math.abs(proficiencyBonus)}`;

    const abilityScoresTable = base.getTableByName('Ability Scores');
    const queryResult = abilityScoresTable.selectRecords();
    const abilityScoreRecords = useRecords(queryResult);

    const options: Array<SelectOption> = [{value: null, label: 'Choose an ability score...', disabled: true}];
    const recordOptions = abilityScoreRecords.map(record => { return {value: record.id, label: record.primaryCellValue as string} });
    options.push(...recordOptions);

    let bonus: number;
    let formattedBonus: string;
    if (abilityScoreRecordId !== null) {
        const abilityScoreRecord = queryResult.getRecordById(abilityScoreRecordId);
        bonus = abilityScoreRecord.getCellValue('Bonus') as number;
        formattedBonus = bonus > 0 ? ` + ${bonus}` : ` - ${Math.abs(bonus)}`;
    } else {
        bonus = 0;
        formattedBonus = ' + 0';
    }

    // TODO: layout is jank
    return (
        <Box display="flex" flexDirection="column">
        <Heading>Attack Roll</Heading>
        <Text>Ability Score</Text>
        <Select
            onChange={newRecordId => {
                setAbilityScoreRecordId(newRecordId as string | null);
                if (newRecordId === null) {
                    globalConfig.setAsync(attackRollAbilityScoreGlobalConfigKey, undefined);
                } else {
                    globalConfig.setAsync(attackRollAbilityScoreGlobalConfigKey, newRecordId);
                }
            }}
            value={abilityScoreRecordId}
            options={options}
            style={{width: 200}}
        />
        <Rollable modifier={bonus + proficiencyBonus} description="Attack Roll">
            <Button>Roll</Button>
        </Rollable>
        </Box>
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

    const dexterityBonus = dexterityRecord.getCellValue('Bonus') as number;

    return (
        <Rollable modifier={dexterityBonus} description="Initiative">
        <Heading>Initiative</Heading>
        <Text>{dexterityBonus}</Text>
        </Rollable>
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
        <>
        <Heading>Hit Dice</Heading>
        <Text>Total: </Text>
        <Text>{hpRecord.getCellValueAsString('Hit Dice')}</Text>
        <Text>Remaining: </Text>
        </>
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
