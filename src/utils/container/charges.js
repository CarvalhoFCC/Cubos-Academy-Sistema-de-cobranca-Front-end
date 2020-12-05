// import React from "react";
// import { createContainer } from "unstated-next";
// import { AuthenticationContainer } from "./authentication";
// import { customerList } from "../api/customerList";
// import { addCustomer } from "../api/addCustomer";

// function useCharges() {
// 	const { token } = AuthenticationContainer.useContainer();

// 	const [clients, setClients] = React.useState([]);

// 	const teste = 96;

// 	async function getClients(token, page) {
//         const responseJson = await customerList(token, page);

//         if (responseJson) {
//             const newList = responseJson.dados.clientes;
//             setClients(newList);
//             console.log("asd", newList);
//         }
// 	}

// 	async function newCustomer(nome, cpf, email, tel, token) {
//         await addCustomer({ nome, cpf, email, tel }, token);
// 	}
	
// 	return {clients, getClients, newCustomer, teste}

// }

// export const ClientsContainer = createContainer(useCharges);