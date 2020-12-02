import React from "react";
import "./styles.css";

export function Button(props) {
    return (
        <div className="buttons">
            <button className={props.class} disabled={props.disabled} > {props.label} </button>
        </div>
    );
}
