import React from "react";
import showPassword from "../../images/showPassword.png";
import "./styles.css";

export function AcessScreenInput(props) {
    return (
        <div className="acessScreenInput">
            <label>
                <span>{props.label}</span>
                <div className="acessScreenInputBox">
                    <input name={props.label} type={props.type} />
                    {props.type === "password" ? (
                        <img src={showPassword} alt="Mostrar senha" />
                    ) : (
                        ""
                    )}
                </div>
            </label>
        </div>
    );
}
