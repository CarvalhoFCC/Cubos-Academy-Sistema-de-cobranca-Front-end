import React from "react";

export function auth(conteudo) {
    return fetch("https://cubos-desafio-4.herokuapp.com/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(conteudo),
    }).then((res) => res.json());
}
