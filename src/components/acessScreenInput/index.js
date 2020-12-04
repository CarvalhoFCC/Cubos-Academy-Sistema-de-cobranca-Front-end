import React from "react";
import showPassword from "../../images/showPassword.png";
import hidePassword from "../../images/hidePassword.png";
import "./styles.css";

export function AcessScreenInput({ inputRef, name, label, type }) {
    const [visible, setVisible] = React.useState(false);

    return (
        <div className="acessScreenInput">
            <label name={name}>
                <span>{label}</span>
                <div className="acessScreenInputBox">
                    <input
                        name={name}
                        type={
                            type === "password"
                                ? visible
                                    ? "text"
                                    : "password"
                                : type
                        }
                        ref={inputRef}
                    />
                    {type === "password" ? (
                        <button
                            type="button"
                            onClick={() => setVisible((v) => !v)}
                        >
                            <img
                                src={visible ? hidePassword : showPassword}
                                alt="Mostrar senha"
                            />
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </label>
        </div>
    );
}
