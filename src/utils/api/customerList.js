import React from "react";

export function customerList(token, page) {
	const pageApi = (page-1) * 10;

	return fetch(
        `https://cubos-desafio-4.herokuapp.com/clientes?clientesPorPagina=10&offset=${pageApi}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token && `Bearer ${token}`,
            },
        }
    ).then((res) => res.json());
}
