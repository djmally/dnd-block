import React from 'react';
import {Box, Text, Heading, useRecords, useBase} from '@airtable/blocks/ui';

export function Proficiency() {
    const base = useBase();
    const proficiency = parseInt(useRecords(base.getTableByName('Proficiency').selectRecords())[0].primaryCellValueAsString || '0');
    const renderedProficiency = proficiency > -1 ? '+' + proficiency.toString() : proficiency.toString();
    return (
        <Box className="proficiencybonus box">
            <Heading>Proficiency Bonus</Heading>
            <Text>{renderedProficiency}</Text>
        </Box>
    );
}
