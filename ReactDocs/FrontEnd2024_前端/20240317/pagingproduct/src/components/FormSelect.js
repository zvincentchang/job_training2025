import { useState } from "react";
export default function FormDropdown() {
    const [selectedOption, setSelectedOption] = useState("1");
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div>
            <label>
                Select an option:
                <select value={selectedOption}
                    onChange={handleDropdownChange}>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
            </label>
            <p>Selected option: {selectedOption}</p>
        </div>
    );
}
