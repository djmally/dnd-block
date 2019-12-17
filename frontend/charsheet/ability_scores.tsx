import React from 'react';
import {Box, useRecords, Heading, useBase} from '@airtable/blocks/ui';
import {Rollable} from './rollable';

export function AbilityScores() {
    const base = useBase();
    const abilityScoresTable = base.getTableByName('Ability Scores');
    const queryResult = abilityScoresTable.selectRecords();
    const records = useRecords(queryResult);
    const abilityScoreList = records.map(record => {
        const abilityScore = record.primaryCellValueAsString || '';
        const stat = record.getCellValueAsString('Stat');
        const statBonus = record.getCellValueAsString('Bonus');
        return (
            <Rollable key={record.id}>
                <Box
                    className="score rollable"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    width="70px"
                    height="70px"
                    backgroundColor="blueLight2"
                    style={{borderRadius: "10px"}}
                >
                        <div style={{display: 'flex'}}>{abilityScore}</div>
                        <div style={{display: 'flex'}}>{parseInt(statBonus) >= 0 ? `+${statBonus}` : statBonus}</div>
                        <div style={{display: 'flex'}}>{stat}</div>
                </Box>
            </Rollable>
        );
    });

    return (
        <div className="scores" style={{padding: 4, border: '3px solid #ddd', flexDirection: 'column'}}>
            <Heading>Ability Scores</Heading>
            {abilityScoreList}
        </div>
    );
}