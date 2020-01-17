import React from 'react';
import {AbilityScores} from './ability_scores';
import {Skills, PassivePerception} from './skills';
import {ArmorClass, AttackRoll, Initiative, HitPoints, HitDice, DeathSaves} from './combat';
import {CharacterDetails} from './character_details';
import {Proficiency} from './proficiency';
import {SavingThrows} from './saving_throws';
import {useBase, Box} from '@airtable/blocks/ui';

export default function Charsheet() {
  const base = useBase();
  return (
    <>
      <CharacterDetails/>
      <Box display="inline-flex">
        <AbilityScores/>
        <Skills/>
        <SavingThrows/>
        <AttackRoll/>
      </Box>
      <Proficiency/>
      <PassivePerception/>
      <ArmorClass/>
      <Initiative/>
      <HitPoints/>
      <HitDice/>
      <DeathSaves/>
    </>
  );
};
