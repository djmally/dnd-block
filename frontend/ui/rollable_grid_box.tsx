import React from 'react';
import {Rollable, RollableProps} from './rollable';
import {Box} from '@airtable/blocks/ui';

type RollableGridBoxProps = RollableProps & {key: string}

export const boxMinHeight = 70;
export const boxMinWidth = 70;
export const boxMargin = 5;

export function RollableGridBox(props: RollableGridBoxProps) {
    return (
        <Rollable key={props.key} numDice={props.numDice} dieSides={props.dieSides} modifier={props.modifier} description={props.description} style={props.style}>
            <Box
                backgroundColor="#eee"
                className="score rollable"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width="auto"
                height="auto"
                minWidth="70px"
                minHeight="70px"
                style={{borderRadius: 10}}
                margin="5px"
            >
                {props.children}
            </Box>
        </Rollable>
    );
}