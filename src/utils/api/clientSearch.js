import React from "react";

export function clientsSearch(token, page, textSearch) {
    return fetch(
        `https://cubos-desafio-4.herokuapp.com/clientes?busca=${textSearch}&clientesPorPagina=10&offset=${page}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token && `Bearer ${token}`,
            },
        }
    ).then((res) => res.json());
}
