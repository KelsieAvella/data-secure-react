import { useState } from "react";
import LoggedIn from "./Components/LoggedIn/LoggedIn";
import LoginForm from "./Components/LoginForm/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;




/*import React from "react";
import "./LoggedIn.css";

const LoggedIn = ({ setIsLoggedIn }) => {
  return (
    <>
      <h1 className="title">You are now logged in!</h1>
      <button className="back_button" onClick={() => setIsLoggedIn(false)}>
        Go Back
      </button>
    </>
  );
};

export default LoggedIn;

*/