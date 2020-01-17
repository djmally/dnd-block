import React from 'react';
import {Box, Text, useRecords, Heading, useBase} from '@airtable/blocks/ui';
import {RollableGridBox, boxMargin, boxMinHeight} from '../ui/rollable_grid_box';

const abilityScoreCount = 6;
export const abilityScoreBoxHeight = (boxMinHeight + (boxMargin * 4)) * abilityScoreCount + 20;

export function AbilityScores() {
    const base = useBase();
    const abilityScoresTable = base.getTableByName('Ability Scores');
    const queryResult = abilityScoresTable.selectRecords();
    const records = useRecords(queryResult);
    const abilityScoreList = records.map(record => {
        const abilityScore = record.primaryCellValueAsString || '';
        const stat = record.getCellValue('Stat');
        const statBonus = record.getCellValue('Bonus') as number;
        return (
            <RollableGridBox key={record.id} modifier={statBonus} description={abilityScore}>
                <Text>{abilityScore}</Text>
                <Text>{statBonus >= 0 ? `+${statBonus}` : statBonus}</Text>
                <Text>{stat}</Text>
            </RollableGridBox>
        );
    });

    return (
        <Box display="flex" flexDirection="column" className="scores" style={{padding: 4, border: '3px solid #ddd', height: abilityScoreBoxHeight}}>
            <Heading style={{borderTop: '3px solid #ddd', borderBottom: '3px solid #ddd'}}>Ability Scores</Heading>
            {abilityScoreList}
        </Box>
    );
}