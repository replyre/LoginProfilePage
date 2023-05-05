import React from "react";
import { useSelector } from "react-redux";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const user = useSelector((states) => states.user.value);
  const bgColor = useSelector((states) => states.bgColor.value);
  return (
    <div className="profileBook" style={{ color: bgColor }}>
      <hr />
      <div className="profilePage">
        <h1>
          Profile Page <FontAwesomeIcon icon={faPortrait} />
        </h1>
        <p>Name: {user.name} </p>
        <p>Age: {user.age}</p>
        <p>E-mail: {user.email} </p>
        <h2>Welcome !!</h2>
      </div>
    </div>
  );
};

export default Profile;
