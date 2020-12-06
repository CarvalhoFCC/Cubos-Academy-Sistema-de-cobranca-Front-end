import React from "react";

export function customerList(token, page, amount = 10) {
	const pageApi = (page-1) * 10;

	return fetch(
        `https://cubos-desafio-4.herokuapp.com/clientes?clientesPorPagina=${amount}&offset=${pageApi}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token && `Bearer ${token}`,
            },
        }
    ).then((res) => res.json());
}
