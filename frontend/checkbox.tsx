import React from 'react';
const Checkbox = ({name, isSelected, onCheckboxChange}) => (
    <input
    type="checkbox"
    name={name}
    checked={isSelected}
    onChange={onCheckboxChange}
    className="form-check-input"/>
);

export default Checkbox;