import React from "react";
import { createContainer } from "unstated-next";
import { customerList } from "../api/customerList";
import { addCustomer } from "../api/addCustomer";

function useClients() {
	const [clients, setClients] = React.useState([]);
	const [customersPages, setCustomersPages] = React.useState([]);

    async function getClients(token, page) {
        const responseJson = await customerList(token, page);

        if (responseJson) {
			const newList = responseJson.dados.clientes;
			const qtdPages = responseJson.dados.totalDePaginas;
			setClients(newList);
			const pagesArray = [];
			for (let i = 1; i <= qtdPages; i++) pagesArray.push(i);
			setCustomersPages(pagesArray);
        }
    }

    async function newCustomer(nome, cpf, email, tel, token) {
        await addCustomer({ nome, cpf, email, tel }, token);
    }

    return { clients, getClients, newCustomer, customersPages };
}

export const ClientsContainer = createContainer(useClients);
