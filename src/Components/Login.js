import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/User";
import { useEffect, useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

export default function Login(props) {
  const bgColor = useSelector((states) => states.bgColor.value);
  const [buttonState, setButtonState] = useState(true);
  const [data, setData] = useState({
    name: "",
    age: 0,
    email: "",
  });
  function check() {
    if (!(data.name === "" || data.age <= 20 || data.email === ""))
      setButtonState(false);
    else setButtonState(true);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    check();
  }, [data]);

  return (
    <div>
      {!props.loggedIn && (
        <div className="form" style={{ color: bgColor }}>
          <h1>
            <FontAwesomeIcon
              icon={faUserAlt}
              style={{ paddingRight: "20px", fontSize: "30px" }}
            />
            Login Page
          </h1>
          {/* {console.log(buttonState)} */}
          <label>
            Name:
            <input
              placeholder="Name..."
              pattern="[A-Za-z0-9]{1,20}"
              required="required"
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  name: e.target.value,
                }));
              }}
            />
          </label>
          <label>
            Age:
            <input
              placeholder="Age (above 20)..."
              required="required"
              max={120}
              type="number"
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  age: e.target.value,
                }));
              }}
            />
          </label>
          <label>
            Email:
            <input
              placeholder="Email Address..."
              required="required"
              onChange={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }));
              }}
            />
          </label>
          <button
            onClick={() => {
              dispatch(
                login({
                  name: data.name,
                  age: data.age,
                  email: data.email,
                })
              );
              props.SetLoggedIn(!props.loggedIn);
            }}
            disabled={buttonState}
          >
            LogIn
          </button>
        </div>
      )}
      {props.loggedIn && (
        <button
          onClick={() => {
            dispatch(logout());
            props.SetLoggedIn(!props.loggedIn);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}
