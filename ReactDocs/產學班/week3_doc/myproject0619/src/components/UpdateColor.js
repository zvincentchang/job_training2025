import { useState } from "react";


function UpdateColor() {
  const [color, setColor] = useState("red");
  const green=() =>{
    setColor("Green");
  }
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={green}
      >Green</button>
    </>
  )  
}
export default UpdateColor;
