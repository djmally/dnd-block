import {UI} from '@airtable/blocks';
import React from 'react';
import {loadCSSFromString} from '@airtable/blocks/ui';

const style = require('./style');
loadCSSFromString(style);
const renderCharsheet = require('./charsheet/charsheet');

function DiceRollerBlock() {
    const base = UI.useBase();
    // TODO: write last 100 rolls to a table
    return (
        <>
            {renderCharsheet(base)}
            <div className="diceRoller">
                <div>
                    <label htmlFor="roll">Roll: </label>
                    <input type="text" id="roll" text="1d20+0" placeholder="d20+0"/>
                </div>
                <button onClick={computeRoll}>Roll Dice</button>
                <button onClick={resetForm}>Reset</button>
                <div className="result"/>
            </div>
        </>
    );
}

function resetForm() {
    setSides('');
    setCount('');
    setModifier('');
}

function computeRoll() {
    const rollString = document.getElementById('roll').value || 'd20+0';
    const {rolls, constants} = parseRoll(rollString);
    console.log(rolls, constants)
    const total = rolls.reduce((acc, n) => acc + n, 0) + constants.reduce((acc, n) => acc + n, 0);
    let pad;
    if (constants.length > 0) {
        if (constants[0] >= 0) {
            pad = '+';
        } else {
            pad = '-';
        }
    } else {
        pad = '';
    }
    document.querySelector('.result').innerText = `Rolling ${rollString}:\n${rolls.join(', ')}${pad}${constants.join(', ')} -> ${total}`;
}

function parseRoll(rollString) {
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
            const randomRolls = rollDice(parseInt(count || 1), parseInt(sides));
            rolls.push(...randomRolls);
        } else if (constRegex.test(token)) {
            console.log(token, "const")
            constants.push(sign * parseInt(token))
        }
    }
    return {rolls, constants};
}

function rollDice(count, sides) {
    const buf = new Uint32Array(count);
    const randVals = window.crypto.getRandomValues(buf).map(val => (val % sides) + 1);
    return randVals
}


function setRoll(value) {
    document.getElementById('roll').value = value;
}

UI.initializeBlock(() => <DiceRollerBlock />);
