import React from "react";
import "./styles.css";

export function Button(props) {
    return (
        <div className="buttons">
            <button className={props.class}> {props.label} </button>
        </div>
    );
}
