export default `
.red {
  background: red;
}

.blue {
  background: blue;
}

.hide {
  display: none !important;
}

textarea {
  font-size: 12px;
  text-align: left;
  width: calc(100% - 20px - 2px);
  border-radius: 10px;
  padding: 10px;
  resize: none;
  overflow: hidden;
  height: 15em;
}

input[type="checkbox"] {
  cursor: pointer;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  width: 10px;
  height: 10px;
  border: 1px solid black;
  border-radius: 10px;
}
input[type="checkbox"]:checked {
  background-color: black;
}

div.box {
  margin-top: 10px;
}

form.charsheet {
  width: 800px;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
}
form.charsheet div.textblock {
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  align-items: center;
}
form.charsheet div.textblock label {
  text-align: center;
  border: 1px solid black;
  border-top: 0;
  font-size: 10px;
  width: calc(100% - 20px - 2px);
  border-radius: 0 0 10px 10px;
  padding: 4px 0;
  font-weight: bold;
}
form.charsheet div.textblock textarea {
  border: 1px solid black;
}
form.charsheet ul {
  margin: 0;
  padding: 0;
}
form.charsheet ul li {
  list-style-image: none;
  display: block;
}
form.charsheet ::-webkit-input-placeholder {
  color: #bbb;
}
form.charsheet :-ms-input-placeholder {
  color: #bbb;
}
form.charsheet ::-ms-input-placeholder {
  color: #bbb;
}
form.charsheet ::placeholder {
  color: #bbb;
}
form.charsheet label {
  text-transform: uppercase;
  font-size: 12px;
}
form.charsheet header {
  display: flex;
  align-contents: stretch;
  align-items: stretch;
}
form.charsheet header section.charname {
  border: 1px solid black;
  border-right: 0;
  border-radius: 10px 0 0 10px;
  padding: 5px 0;
  background-color: #eee;
  width: 30%;
  display: flex;
  flex-direction: column-reverse;
  bottom: 0;
  top: 0;
  margin: auto;
}
form.charsheet header section.charname div.charname {
  padding: 0.5em;
  margin: 5px;
  border: 0;
}
form.charsheet header section.charname label {
  padding-left: 1em;
}
form.charsheet header section.misc {
  width: 70%;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 1em;
  padding-right: 1em;
}
form.charsheet header section.misc ul {
  padding: 10px 0px 5px 0px;
  display: flex;
  flex-wrap: wrap;
}
form.charsheet header section.misc ul li {
  width: 33.33333%;
  display: flex;
  flex-direction: column-reverse;
}
form.charsheet header section.misc ul li label {
  margin-bottom: 5px;
}
form.charsheet header section.misc ul li div.classlevel {
  border: 0;
  border-bottom: 1px solid #ddd;
}
form.charsheet main {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
form.charsheet main div.label-container {
  position: relative;
  width: 100%;
  height: 18px;
  margin-top: 6px;
  border: 1px solid black;
  border-left: 0;
  text-align: center;
}
form.charsheet main div.label-container > label {
  position: absolute;
  left: 0;
  top: 1px;
  -webkit-transform: translate(0%, 50%);
          transform: translate(0%, 50%);
  width: 100%;
  font-size: 8px;
}
form.charsheet main > section {
  width: 32%;
  display: flex;
  flex-direction: column;
}
form.charsheet main > section section.attributes {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
form.charsheet main > section section.attributes div.scores {
  width: 101px;
  background-color: #bbb;
  border-radius: 10px;
  padding-bottom: 5px;
}
form.charsheet main > section section.attributes div.scores label {
  font-size: 8px;
  font-weight: bold;
}
form.charsheet main > section section.attributes div.scores ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
form.charsheet main > section section.attributes div.scores ul li {
  height: 80px;
  width: 70px;
  background-color: white;
  border: 1px solid black;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}
form.charsheet main > section section.attributes div.scores ul li input {
  width: 100%;
  padding: 0;
  border: 0;
}
form.charsheet main > section section.attributes div.scores ul li div.score div.stat {
  text-align: center;
  font-size: 40px;
  padding: 2px 0px 0px 0px;
  background: white;
}
form.charsheet main > section section.attributes div.scores ul li div.modifier {
  margin-top: 3px;
}
form.charsheet main > section section.attributes div.scores ul li div.modifier div.modifier {
  background: white;
  width: 30px;
  height: 20px;
  border: 1px inset black;
  border-radius: 20px;
  margin: -1px;
  text-align: center;
}
form.charsheet main > section section.attributes div.attr-applications div.inspiration {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}
form.charsheet main > section section.attributes div.attr-applications div.inspiration input {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 1px solid black;
  padding: 15px;
  border-radius: 10px;
}
form.charsheet main > section section.attributes div.attr-applications div.proficiencybonus {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}
form.charsheet main > section section.attributes div.attr-applications div.proficiencybonus div.proficiencybonus {
  width: 30px;
  height: 28px;
  border: 1px solid black;
  text-align: center;
  border-radius: 10px;
}
form.charsheet main > section section.attributes div.attr-applications div.list-section {
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 5px;
}
form.charsheet main > section section.attributes div.attr-applications div.list-section div.label {
  margin-top: 10px;
  margin-bottom: 2.5px;
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
}
form.charsheet main > section section.attributes div.attr-applications div.list-section ul li {
  display: flex;
  align-items: center;
}
form.charsheet main > section section.attributes div.attr-applications div.list-section ul li > * {
  margin-left: 5px;
}
form.charsheet main > section section.attributes div.attr-applications div.list-section ul li label {
  text-transform: none;
  font-size: 8px;
  text-align: left;
  order: 3;
}
form.charsheet main > section section.attributes div.attr-applications div.list-section ul li label span.skill {
  color: #bbb;
}
form.charsheet main > section section.attributes div.attr-applications div.list-section ul li div.skill {
  width: 30px;
  font-size: 12px;
  text-align: center;
  border: 0;
  border-bottom: 1px solid black;
  order: 2;
}
form.charsheet main > section div.passive-perception {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}
form.charsheet main > section div.passive-perception div.passive-perception {
  width: 30px;
  height: 28px;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
}
form.charsheet main > section div.otherprofs textarea {
  height: 26em;
}
form.charsheet main section.combat {
  background-color: #eee;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
}
form.charsheet main section.combat > div {
  overflow: hidden;
}
form.charsheet main section.combat > div.armorclass, form.charsheet main section.combat > div.initiative, form.charsheet main section.combat > div.speed {
  flex-basis: 33.333%;
}
form.charsheet main section.combat > div.armorclass > div, form.charsheet main section.combat > div.initiative > div, form.charsheet main section.combat > div.speed > div {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 10px;
}
form.charsheet main section.combat > div.armorclass > div label, form.charsheet main section.combat > div.initiative > div label, form.charsheet main section.combat > div.speed > div label {
  font-size: 8px;
  width: 50px;
  border: 1px solid black;
  border-top: 0;
  background-color: white;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 0 0 10px 10px;
}
form.charsheet main section.combat > div.armorclass > div input, form.charsheet main section.combat > div.initiative > div div, form.charsheet main section.combat > div.speed > div input {
  height: 70px;
  width: 70px;
  border-radius: 10px;
  border: 1px solid black;
  text-align: center;
  font-size: 30px;
}
form.charsheet main section.combat > div.hp {
  flex-basis: 100%;
}
form.charsheet main section.combat > div.hp > div.regular {
  background-color: white;
  border: 1px solid black;
  margin: 10px;
  margin-bottom: 5px;
  border-radius: 10px 10px 0 0;
}
form.charsheet main section.combat > div.hp > div.regular > div.max {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
form.charsheet main section.combat > div.hp > div.regular > div.max label {
  font-size: 10px;
  text-transform: none;
  color: #bbb;
}
form.charsheet main section.combat > div.hp > div.regular > div.max input {
  width: 40%;
  border: 0;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
  text-align: center;
}
form.charsheet main section.combat > div.hp > div.regular > div.current {
  display: flex;
  flex-direction: column-reverse;
}
form.charsheet main section.combat > div.hp > div.regular > div.current input {
  border: 0;
  width: 100%;
  padding: 1em 0;
  font-size: 20px;
  text-align: center;
}
form.charsheet main section.combat > div.hp > div.regular > div.current label {
  font-size: 10px;
  padding-bottom: 5px;
  text-align: center;
  font-weight: bold;
}
form.charsheet main section.combat > div.hp > div.temporary {
  margin: 10px;
  margin-top: 0;
  border: 1px solid black;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column-reverse;
  background-color: white;
}
form.charsheet main section.combat > div.hp > div.temporary input {
  padding: 1em 0;
  font-size: 20px;
  border: 0;
  text-align: center;
}
form.charsheet main section.combat > div.hp > div.temporary label {
  font-size: 10px;
  padding-bottom: 5px;
  text-align: center;
  font-weight: bold;
}
form.charsheet main section.combat > div.hitdice, form.charsheet main section.combat > div.deathsaves {
  flex: 1 50%;
  height: 100px;
}
form.charsheet main section.combat > div.hitdice > div, form.charsheet main section.combat > div.deathsaves > div {
  height: 80px;
}
form.charsheet main section.combat > div.hitdice > div {
  background-color: white;
  margin: 10px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}
form.charsheet main section.combat > div.hitdice > div > div.total {
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  padding: 5px 0;
}
form.charsheet main section.combat > div.hitdice > div > div.total label {
  font-size: 10px;
  color: #bbb;
  margin: 0.25em;
  text-transform: none;
}
form.charsheet main section.combat > div.hitdice > div > div.total input {
  font-size: 12px;
  flex-grow: 1;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 50%;
  margin-right: 0.25em;
  padding: 0 0.25em;
  text-align: center;
}
form.charsheet main section.combat > div.hitdice > div > div.remaining {
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
}
form.charsheet main section.combat > div.hitdice > div > div.remaining label {
  text-align: center;
  padding: 2px;
  font-size: 10px;
}
form.charsheet main section.combat > div.hitdice > div > div.remaining input {
  text-align: center;
  border: 0;
  flex: 1;
}
form.charsheet main section.combat > div.deathsaves > div {
  margin: 10px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column-reverse;
}
form.charsheet main section.combat > div.deathsaves > div > div.label {
  text-align: center;
}
form.charsheet main section.combat > div.deathsaves > div > div.label label {
  font-size: 10px;
}
form.charsheet main section.combat > div.deathsaves > div > div.marks {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
}
form.charsheet main section.combat > div.deathsaves > div > div.marks div.deathsuccesses, form.charsheet main section.combat > div.deathsaves > div > div.marks div.deathfails {
  display: flex;
  align-items: center;
}
form.charsheet main section.combat > div.deathsaves > div > div.marks div.deathsuccesses label, form.charsheet main section.combat > div.deathsaves > div > div.marks div.deathfails label {
  font-size: 8px;
  text-align: right;
  flex: 1 50%;
}
form.charsheet main section.combat > div.deathsaves > div div.bubbles {
  flex: 1 40%;
  margin-left: 5px;
}
form.charsheet main section.attacksandspellcasting {
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 10px;
}
form.charsheet main section.attacksandspellcasting > div {
  margin: 10px;
  display: flex;
  flex-direction: column;
}
form.charsheet main section.attacksandspellcasting > div > label {
  order: 3;
  text-align: center;
}
form.charsheet main section.attacksandspellcasting > div > table {
  width: 100%;
}
form.charsheet main section.attacksandspellcasting > div > table th {
  font-size: 10px;
  color: #ddd;
}
form.charsheet main section.attacksandspellcasting > div > table input {
  width: calc(100% - 4px);
  border: 0;
  background-color: #eee;
  font-size: 10px;
  padding: 3px;
}
form.charsheet main section.attacksandspellcasting > div textarea {
  border: 0;
}
form.charsheet main section.equipment {
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 10px;
}
form.charsheet main section.equipment > div {
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
form.charsheet main section.equipment > div > div.money ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
form.charsheet main section.equipment > div > div.money ul > li {
  display: flex;
  align-items: center;
}
form.charsheet main section.equipment > div > div.money ul > li label {
  border: 1px solid black;
  border-radius: 10px 0 0 10px;
  border-right: 0;
  width: 20px;
  font-size: 8px;
  text-align: center;
  padding: 3px 0;
}
form.charsheet main section.equipment > div > div.money ul > li input {
  border: 1px solid black;
  border-radius: 10px;
  width: 40px;
  padding: 10px 3px;
  font-size: 12px;
  text-align: center;
}
form.charsheet main section.equipment > div > label {
  order: 3;
  text-align: center;
  flex: 100%;
}
form.charsheet main section.equipment > div > textarea {
  flex: 1;
  border: 0;
}
form.charsheet main section.flavor {
  padding: 10px;
  background: #bbb;
  border-radius: 10px;
}
form.charsheet main section.flavor div {
  background: white;
  display: flex;
  flex-direction: column-reverse;
  padding: 5px;
  border: 1px solid black;
}
form.charsheet main section.flavor div label {
  text-align: center;
  font-size: 10px;
  margin-top: 3px;
}
form.charsheet main section.flavor div textarea {
  border: 0;
  border-radius: 0;
  height: 4em;
}
form.charsheet main section.flavor div:first-child {
  border-radius: 10px 10px 0 0;
}
form.charsheet main section.flavor div:not(:first-child) {
  margin-top: 10px;
}
form.charsheet main section.flavor div:last-child {
  border-radius: 0 0 10px 10px;
}
form.charsheet main section.features {
  padding: 10px;
}
form.charsheet main section.features div {
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column-reverse;
}
form.charsheet main section.features div label {
  text-align: center;
}
form.charsheet main section.features div textarea {
  border: 0;
  padding: 5px;
  height: 43em;
}
ul li div.save {
  width: 30px;
  font-size: 12px;
  text-align: center;
  border: 0;
  border-bottom: 1px solid black;
  order: 2;
}

div.diceRoller {
  font-size: 12px;
  text-align: left;
  width: calc(100% - 20px - 2px);
  border-radius: 10px;
  padding: 10px;
  resize: none;
  overflow: hidden;
  height: 15em;
}
`;
