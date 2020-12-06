import React from "react";

export function addCharge(conteudo, token) {
    return fetch("https://cubos-desafio-4.herokuapp.com/cobrancas", {
        method: "POST",
        headers: {
			"Content-Type": "application/json",
			Authorization: token && `Bearer ${token}`,
        },
		body: JSON.stringify(conteudo),
    }).then((res) => res.json());
}