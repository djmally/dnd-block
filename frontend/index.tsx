import React, { useState } from 'react';
import {useBase, initializeBlock} from '@airtable/blocks/ui';
import {DiceRoller} from './dice_roller';
import Charsheet from './charsheet/charsheet';

function DnDBlock() {
    // TODO: send rolls to roll20 chat over API
    return (
        <>
            <DiceRoller/>
            <Charsheet/>
        </>
    );
}

initializeBlock(() => <DnDBlock/>);
