import React from "react";
import { createContainer } from "unstated-next";
import { chargesList } from "../api/chargesList";
import { addCharge } from "../api/createCharge";

function useCharges() {
    const [charges, setCharges] = React.useState([]);

	const teste = 96;
	
	async function getCharges(token, page) {
		const responseJson = await chargesList(token, page);

		if(responseJson) {
			const newList = responseJson.dados.cobrancas;
			setCharges(newList);
		}
	}

    async function newCharge(idDoCliente, descricao, valor, vencimento, token) {
        await addCharge({ idDoCliente, descricao, valor, vencimento }, token);
    }

    return { charges, getCharges, newCharge, teste };
}

export const ChargesContainer = createContainer(useCharges);
