import { useState } from "react";
import ReactDOM from "react-dom/client";
function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "Red"
  });
  
  const updateColor = () => {
    setCar(previousState => {
     // ...previousState merge color , model into Car properties
      var c=prompt("favorite color is ?");
      var m=prompt("favorite model is ?");
      return { ...previousState, color: c , model:m }
    });
  }
  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Change state</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

export default Car;              

