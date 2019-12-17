import React, {useState} from 'react';
import {base} from '@airtable/blocks';
import {Heading, Text, useRecords, useGlobalConfig} from '@airtable/blocks/ui';
import {Table} from '@airtable/blocks/models';

export const lastRollResultKey = 'last_roll_result';

// TODO: make this a floating component
export function DiceRoller() {
    const globalConfig = useGlobalConfig();
    const [rollString, setRollString] = useState('1d20+0');
    const rollTable = base.getTableByName('Roll History');
    const queryResult = rollTable.selectRecords();
    const records = useRecords(queryResult);
    const result = globalConfig.get(lastRollResultKey) as {preamble: string, arrow: string, result: string};
    return (
        <div style={{
            position: 'fixed',
            top: 20,
            right: 20,
            backgroundColor: '#0C9',
            color: '#FFF',
            borderRadius: '50',
            textAlign: 'center',
            boxShadow: '2px 2px 3px #999',
        }}>
            <Heading>Roll:</Heading>
            <input type="text" id="roll" onChange={event => setRollString(event.target.value)} placeholder="d20+0"/>
            <button onClick={async () => {
                const rollResult = await computeRoll(rollString);
                await globalConfig.setAsync(lastRollResultKey, rollResult)
                if (records.length > 100) {
                    const numberOfRecordsToDelete = records.length - 100;
                    await rollTable.deleteRecordsAsync(records.slice(0,numberOfRecordsToDelete));
                }
             }}>Roll Dice</button>
            <button onClick={resetForm}>Reset</button>
            <div className="result">
                <Text>{result.preamble}</Text>
                <Text>{result.arrow}</Text>
                <Text>{result.result}</Text>
            </div>
        </div>
    );
}

export async function computeRoll(rollString: string, description?: string): Promise<{preamble: string, arrow: string, result: string}> {
    const {rolls, constants} = parseRoll(rollString);
    console.log(rolls, constants)
    const total = rolls.reduce((acc, n) => acc + n, 0) + constants.reduce((acc, n) => acc + n, 0);
    const clampedTotal = total < 1 ? 1 : total;
    let pad: string;
    if (constants.length > 0) {
        if (constants[0] >= 0) {
            pad = '+';
        } else {
            pad = '';
        }
    } else {
        pad = '';
    }
    const rollTable = base.getTableByName('Roll History');
    await writeRollHistory(rollTable, rollString, clampedTotal);
    return {
        preamble: `Rolling ${rollString}:\n${rolls.join('+')}${pad}${constants.join('')}`,
        arrow: `↪️`,
        result: `${clampedTotal}${description || ''}`
    };
}

async function writeRollHistory(rollTable: Table, rollString: string, result: number) {
    await rollTable.createRecordsAsync([{'Result': result, 'Roll': rollString}]);
}

function parseRoll(rollString: string) {
    const opRegex = /([\+-])/
    const dieRegex = /\d*d\d+/
    const constRegex = /\d+/

    const tokens = rollString.split(opRegex)
    let sign = 1;
    const rolls = [];
    const constants = [];
    for (const token of tokens) {
        if (opRegex.test(token)) {
            console.log(token, "op")
            sign = token === '+' ? 1 : -1; 
        } else if (dieRegex.test(token)) {
            const [count, sides] = token.split('d');
            console.log(token, "die", count, sides)
            const randomRolls = rollDice(parseInt(count || '1'), parseInt(sides));
            rolls.push(...randomRolls);
        } else if (constRegex.test(token)) {
            console.log(token, "const")
            constants.push(sign * parseInt(token))
        }
    }
    return {rolls, constants};
}

export function rollDice(count: number, sides: number): Uint32Array {
    const buf = new Uint32Array(count);
    const randVals = window.crypto.getRandomValues(buf).map(val => (val % sides) + 1);
    return randVals
}

function resetForm() {
    this.setSides('');
    this.setCount('');
    this.setModifier('');
}
