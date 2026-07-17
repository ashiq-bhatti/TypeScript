import React, { useState } from "react";

function Loggedin() {

  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleLoggedIn = () => {
    setisLoggedIn(true);
  };
  const handleoggedOut = () => {
    setisLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLoggedIn}>Log in</button>
      <button onClick={handleoggedOut}>Log Out</button>
      <div>User is {isLoggedIn ? 'login' : "logout"}</div>
    </div>
  );
}

export default Loggedin;
