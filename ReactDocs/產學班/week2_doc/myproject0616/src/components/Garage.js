import React from 'react'
function Car(props) {
    return <li>I am a {props.brand}</li>;
}

function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <div>
            <h1>In my garage:</h1>
            <ul>
                {cars.map((car) => <Car brand={car} />)}
            </ul>
        </div>
    );
}
export default Garage;