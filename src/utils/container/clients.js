import React from "react";
import { createContainer } from "unstated-next";
import { customerList } from "../api/customerList";
import { addCustomer } from "../api/addCustomer";

function useClients() {
	const [clients, setClients] = React.useState([]);

	async function getClients(token, page) {
        const responseJson = await customerList(token, page);

        if (responseJson) {
            const newList = responseJson.dados.clientes;
            setClients(newList);
        }
	}

	async function newCustomer(nome, cpf, email, tel, token) {
        await addCustomer({ nome, cpf, email, tel }, token);
	}
	
	return {clients, getClients, newCustomer}

}

export const ClientsContainer = createContainer(useClients);