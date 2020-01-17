import React from 'react';
import {Box, Heading, Text, useRecords, useBase} from '@airtable/blocks/ui';
import {Checkbox} from './checkbox';

function _Speed() {
    const base = useBase();
    const raceTable = base.getTableByName('Race');
    const queryResult = raceTable.selectRecords();
    const raceRecord = useRecords(queryResult)[0];
    const speed = raceRecord.getCellValueAsString('Speed') || '0'
    return (
        <Box display="flex" flexDirection="column">
            <Heading>Speed</Heading>
            <Text>{speed}</Text>
        </Box>
    );
}

function _ClassLevels() {
    const base = useBase();
    const classesTable = base.getTableByName('Classes');
    const queryResult = classesTable.selectRecords();
    const records = useRecords(queryResult);
    return (
        <>
        <Box display="flex" flexDirection="column" paddingX={4}>
            <Heading>Classes</Heading>
            {records.map(record => {
                const className = record.primaryCellValueAsString || '';
                const classLevels = record.getCellValueAsString('Levels');
                const subclass = record.getCellValueAsString('Subclass');
                // TODO:
                const classFeatures = record.getCellValueAsString('Class Features');
                return (
                    <Text key={record.id}>
                        {className} ({subclass}) {classLevels}
                    </Text>
                );
            })}
        </Box>
        <Box display="flex" flexDirection="column">
            <Text>Inspiration</Text>
            <Checkbox name="inspiration" isSelected={false}/>
        </Box>
        <_Speed/>
        </>
    );
}

export function CharacterDetails() {
    const base = useBase();
    const characterName = useRecords(base.getTableByName('Player Details').selectRecords())[0].getCellValueAsString('Name');
    const characterDetails = (
        <Box display="flex" flexDirection="column" paddingX={4}>
            <Heading className="charname">Character Name</Heading>
            <Text className="charname">{characterName}</Text>
        </Box>
    );
    return (
        <Box style={{padding: 4, border: '3px solid #ddd'}} display="flex" flexDirection="row">
            {characterDetails}
            <_ClassLevels/>
        </Box>
    );
}
