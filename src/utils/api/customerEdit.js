import React from "react";

export function editCustomer(conteudo, token) {
    return fetch("https://cubos-desafio-4.herokuapp.com/clientes", {
        method: "POST",
        headers: {
			"Content-Type": "application/json",
			Authorization: token && `Bearer ${token}`,
        },
		body: JSON.stringify(conteudo),
    }).then((res) => res.json());
}