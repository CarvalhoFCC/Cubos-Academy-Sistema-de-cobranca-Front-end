import React from "react";
import "./styles.css";

export function CustomerAndChargeInputs({
    inputRef,
    name,
    label,
    type,
    placeholder,
}) {
    return (
        <label name={name}>
            <span>{label}</span>
            {label === "Valor" ? (
                <div>
                    <span>R$</span>
                    <input
                        name={name}
                        placeholder={placeholder}
                        type={type}
                        ref={inputRef}
                    />
                </div>
            ) : (
                <input
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    ref={inputRef}
                />
            )}
        </label>
    );
}
