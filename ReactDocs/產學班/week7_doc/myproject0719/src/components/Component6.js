import { useState, createContext, useContext } from "react";
//import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component6() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component7 />
    </UserContext.Provider>
  );
}

function Component7() {
  return (
    <>
      <h1>Component 7</h1>
      <Component8 />
    </>
  );
}

function Component8() {
  return (
    <>
      <h1>Component 8</h1>
      <Component9 />
    </>
  );
}

function Component9() {
  return (
    <>
      <h1>Component 9</h1>
      <Component10 />
    </>
  );
}

function Component10() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 10</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default Component6;
