import React from "react";
import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
function User() {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLoggedIn = () => {
    setUser({
      name: "Hassnain",
      email: "hassnainai1122@gmail.com",
    });
  };
  const handleoggedOut = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLoggedIn}>Log in</button>
      <button onClick={handleoggedOut}>Log Out</button>

      <div>User name is {user?.name} and {user?.email}</div>
    </div>
  );
}

export default User;
