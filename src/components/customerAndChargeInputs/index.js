import React from "react";
import "./styles.css";

export function CustomerAndChargeInputs({
    inputRef,
    name,
    label,
    type,
	placeholder,
	clasS,
}) {
    return (
        <label name={name}>
            <span>{label}</span>
            {label === "Valor" ? (
                <div className="inputValor">
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
