import React from "react";
import { createContainer } from "unstated-next";
import { chargesList } from "../api/chargesList";
import { addCharge } from "../api/createCharge";

function useCharges() {
    const [charges, setCharges] = React.useState([]);
    const [chargesPages, setChargesPages] = React.useState([]);

    async function getCharges(token, page) {
        const responseJson = await chargesList(token, page);

        if (responseJson) {
            const newList = responseJson.dados.cobrancas;
            const qtdPages = responseJson.dados.totalDePaginas;
            setCharges(newList);
            const pagesArray = [];
			for (let i = 1; i <= qtdPages; i++) pagesArray.push(i);
			setChargesPages(pagesArray);
        }
    }

    async function newCharge(idDoCliente, descricao, valor, vencimento, token) {
        await addCharge({ idDoCliente, descricao, valor, vencimento }, token);
    }

    return { charges, getCharges, newCharge, chargesPages };
}

export const ChargesContainer = createContainer(useCharges);
