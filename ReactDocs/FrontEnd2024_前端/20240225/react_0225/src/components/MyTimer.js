import { useState, useEffect } from "react";

function MyTimer() {
    const [count, setCount] = useState(0);
    // const timer = () => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1);
    //     }, 1000);
    // };

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
    }, [count]);

    return <h1>I have rendered {count} times!</h1>;
}

export default MyTimer;
