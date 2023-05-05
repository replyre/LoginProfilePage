import React from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/BackColor";
import "./ChangeColor.css";
const ChangeColor = () => {
  const [color, setColor] = React.useState("");
  const dispatch = useDispatch();
  return (
    <div className="colorBox">
      <input
        placeholder="Enter color or code"
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button
        className="colorButton"
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default ChangeColor;
