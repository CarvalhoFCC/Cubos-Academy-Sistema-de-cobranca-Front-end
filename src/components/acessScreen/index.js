import React from "react";
import "./styles.css";

export function AcessScreen(props) {
    return (
        <div className="acessScreen">
            <div className="acessScreenBox">{props.children}</div>
            <div>{props.extraInfo}</div>
        </div>
    );
}
