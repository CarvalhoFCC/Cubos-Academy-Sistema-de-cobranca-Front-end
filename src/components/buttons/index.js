import React from "react";
import "./styles.css";

export function Button(props) {
    return (
        <div className="buttons">
            <button
                className={props.class}
                disabled={props.disabled}
                type={props.type}
				onClick={props.onClick}
            >
                {" "}
                {props.label}{" "}
            </button>
        </div>
    );
}
