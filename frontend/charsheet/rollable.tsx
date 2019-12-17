import React from 'react';
import {computeRoll, lastRollResultKey} from '../dice_roller';
import {useGlobalConfig} from '@airtable/blocks/ui';

interface RollableProps {
    numDice?: number,
    dieSides?: number,
    modifier?: number,
    description?: string,
    children?: React.ReactNode | string,
    style?: React.CSSProperties,
}

export function Rollable(props: RollableProps) {
    const globalConfig = useGlobalConfig();
    // TODO: globalConfig is slow af
    return (
        <div
            className="rollable"
            style={props.style}
            onClick={async () => {
                const modifier = props.modifier || 0;
                const op = modifier >= 0 ? '+' : '';
                const rollQuery = `${props.numDice || 1}d${props.dieSides || 20}${op}${modifier || 0}`;
                const rollString = await computeRoll(rollQuery, props.description);
                await globalConfig.setAsync(lastRollResultKey, rollString);
            }}
        >
            {props.children}
        </div>
    );
}