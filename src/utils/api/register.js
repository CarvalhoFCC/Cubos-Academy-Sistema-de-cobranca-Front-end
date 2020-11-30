import React from "react";

export function registration(conteudo) {
    return fetch("https://cubos-desafio-4.herokuapp.com/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(conteudo),
    }).then((res) => res.json());
}