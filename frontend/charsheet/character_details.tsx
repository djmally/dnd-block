import React from 'react';
import {Box, Heading, Text, useRecords, useBase} from '@airtable/blocks/ui';
import {Checkbox} from './checkbox';

function _ClassLevels() {
    const base = useBase();
    const classesTable = base.getTableByName('Classes');
    const queryResult = classesTable.selectRecords();
    const records = useRecords(queryResult);
    return (
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
        <label htmlFor="inspiration">Inspiration</label>
        <Checkbox name="inspiration" isSelected={false}/>
        </Box>
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
        <Box display="flex" style={{padding: 4, border: '3px solid #ddd', flexDirection: 'row'}}>
            {characterDetails}
            <_ClassLevels/>
        </Box>
    );
}
