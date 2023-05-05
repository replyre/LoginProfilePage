import React from "react";
import {Header, Content} from "./library";
import "./style.css"
import data from"./data";

export default function App(){
    const dataElement=data.map( e =>{
        return(
            <Content  item={e}/>
        )
    }
    )
    return(
      <div>
        <Header />
       {dataElement}
        </div>
    )
    
}