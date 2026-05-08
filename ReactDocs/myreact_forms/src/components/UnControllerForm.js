import { useRef } from "react";

export default function UncontrollerForm() {
  const selectRef = useRef(null);
  const checkboxRef = useRef(null);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Input value:", inputRef.current.value);
    console.log("Select value:", selectRef.current.value);
    console.log("Checkbox value:", checkboxRef.current.checked);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Name:</p>
        <input ref={inputRef} type="text" />
      </label>
      <p/>
      <label>
        <p>Favorite color:</p>
        <select ref={selectRef}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </label>
      <p/>
      <label>
        Do you like React?
        <input type="checkbox" ref={checkboxRef} />
      </label>
      <p/>
      <button type="submit">Submit</button>
    </form>
  );
}
