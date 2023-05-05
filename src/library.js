import React from "react";
import logo from "./images/world.svg";
import location from "./images/location.svg"

export function Header() {
  return (
    <header>
      <div className="head">
        <img src={logo} alt="logo" id="logo" />
        <p>myTravelBlog</p>
      </div>
    </header>
  );
}

export function Content(props) {
  return (
    <div className="tabs">
      <img src={props.item.img} alt="image" id="image" />
      <div className="content">
        <div className="location">
          <img src={location} alt="logo" id="logo" />
          <p className="place">{props.item.place}</p>
          
            <a href={props.item.map}>
              View on Google maps
            </a>
          </div>
          <h1>{props.item.name}</h1>
          <p className="date">{props.item.date}</p>
          <p>
           {props.item.para}
          </p>
        
      </div>
    </div>
  );
}
