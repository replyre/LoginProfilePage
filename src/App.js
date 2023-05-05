import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import ChangeColor from "./Components/ChangeColor";

const App = () => {
  const [loggedIn, SetLoggedIn] = React.useState(false);
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0px",
      }}
    >
      <ChangeColor />
      {loggedIn && <Profile />}
      <Login loggedIn={loggedIn} SetLoggedIn={SetLoggedIn} />
    </div>
  );
};

export default App;
