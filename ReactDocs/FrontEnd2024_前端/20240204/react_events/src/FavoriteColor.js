import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");
  const changeColor=()=>{
     var c=prompt('favorite color is ?');
     setColor(c);
  }
  return (
    <div>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={changeColor}
      >Blue</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
export default FavoriteColor