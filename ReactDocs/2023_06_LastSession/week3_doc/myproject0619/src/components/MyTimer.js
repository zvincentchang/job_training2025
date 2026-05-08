import { useState, useEffect } from "react";
//import ReactDOM from "react-dom/client";

function MyTimer() {
  const [count, setCount] = useState(0);
  // const change=()=>{
  //   return count+1;
  // }
  useEffect(() => {
    setTimeout(() => {
      setCount(()=> count+1);
      
    }, 1000);
  },[]);

  return <h1>I have rendered {count} times!</h1>;
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<MyTimer />);

export default MyTimer;
 
