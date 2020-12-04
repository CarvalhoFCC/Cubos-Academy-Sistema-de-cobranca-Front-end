import React from "react";

export function report(token) {
    return fetch(
        `https://cubos-desafio-4.herokuapp.com/relatorios`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token && `Bearer ${token}`,
            },
        }
    ).then((res) => res.json());
}
