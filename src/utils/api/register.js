import React from "react";

export function registration(email, senha, nome) {
    return fetch("https://cubos-desafio-4.herokuapp.com/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, senha, nome}),
    }).then((res) => res.json());
}