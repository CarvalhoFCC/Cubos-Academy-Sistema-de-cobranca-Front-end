import React from "react";

export function chargesList(token, page) {
    return fetch(
        `https://cubos-desafio-4.herokuapp.com/cobrancas?cobrancasPorPagina=10&offset=${page}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token && `Bearer ${token}`,
            },
        }
    ).then((res) => res.json());
}
