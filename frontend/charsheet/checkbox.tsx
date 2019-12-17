import React, {useState} from 'react';
import { useGlobalConfig } from '@airtable/blocks/ui';

function Checkbox(props: {name: string, isSelected: boolean, mutationHook?: (isChecked: boolean) => Promise<void>}) {
    const globalConfig = useGlobalConfig();
    const key = `${props.name}-checkbox`
    const [isChecked, setIsChecked] = useState(props.isSelected);

    return (
        <input
            type="checkbox"
            name={key}
            checked={isChecked}
            onChange={async event => {
                // Save the checked state locally
                setIsChecked(event.target.checked);
                // NOTE: promises in the branches below are fired and forgotten!
                if (props.mutationHook !== undefined) {
                    // Save checkboxes that exist in the base to the base
                    props.mutationHook(event.target.checked);
                } else {
                    // Save checkboxes that are not written to the base to global state
                    globalConfig.setAsync(key, event.target.checked);
                }
            }}
            className="form-check-input"
        />
    );
}

export default Checkbox;