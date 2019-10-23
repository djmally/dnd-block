import React from 'react';
import renderAbilityScores from './ability_scores';
import _skills from './skills';
const {renderSkills, renderPassivePerception} = _skills;
import _combat from './combat';
const {renderArmorClass, renderInitiative, renderSpeed, renderHitPoints, renderHitDice, renderDeathSaves} = _combat;
import renderCharacterDetails from './character_details';
import renderProficiency from './proficiency';
import renderSavingThrows from './saving_throws';
import Checkbox from '../checkbox';

export default function(base) {
  const inspirationBox = (
    <div className="inspiration box">
      <div className="label-container">
        <label htmlFor="inspiration">Inspiration</label>
      </div>
      <Checkbox name="inspiration" isSelected={false} onCheckboxChange={() => {false}}/>
    </div>
  );
  return (
    <form className="charsheet">
      <header>
        {renderCharacterDetails(base)}
      </header>
    <main>
      <section>
        <section className="attributes">
          {renderAbilityScores(base)}
          <div className="attr-applications">
            {inspirationBox}
            {renderProficiency(base)}
            <div className="saves list-section box">
              {renderSavingThrows(base)}
            </div>
            <div className="skills list-section box">
              {renderSkills(base)}
            </div>
          </div>
        </section>
        <div className="passive-perception box">
          <div className="label-container">
            <label htmlFor="passiveperception">Passive Wisdom (Perception)</label>
          </div>
          {renderPassivePerception(base)}
        </div>
      </section>
      <section>
        <section className="combat">
          {renderArmorClass(base)}
          {renderInitiative(base)}
          {renderSpeed(base)}
          {renderHitPoints(base)}
          {renderHitDice(base)}
          {renderDeathSaves(base)}
        </section>
      </section>
    </main>
    </form>
  );
};
