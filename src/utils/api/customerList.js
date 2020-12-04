import React from "react";

export function customerList(token, page, qtdPorPagina = 10) {
    return fetch(
        `https://cubos-desafio-4.herokuapp.com/clientes?clientesPorPagina=${qtdPorPagina}&offset=${page}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token && `Bearer ${token}`,
            },
        }
    ).then((res) => res.json());
}
