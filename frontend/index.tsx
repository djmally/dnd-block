import React, { useState } from 'react';
import {initializeBlock, useGlobalConfig} from '@airtable/blocks/ui';
import {DiceRoller, lastRollResultKey} from './dice_roller';
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
