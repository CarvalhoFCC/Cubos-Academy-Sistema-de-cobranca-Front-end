import React from "react";
import { createContainer } from "unstated-next";
import { AuthenticationContainer } from "../../utils/container/authentication";
import { report } from "../api/roport";

function useClients() {
    const { token } = AuthenticationContainer.useContainer();
    const [clients, setClients] = React.useState();

    function clientsList(page, qtdPorPagina = 10) {
        fetch(
            `https://cubos-desafio-4.herokuapp.com/clientes?clientesPorPagina=${qtdPorPagina}&offset=${page}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token && `Bearer ${token}`,
                },
            }
		).then((res) => res.json())
		.then((r) => {
			if(r.status >= 200 && r.status <= 399) {
				setClients(r.dados.clientes);
			}
		});
	}
	
	return { clientsList, clients }
}

// function useReport() {
// 	const { token } = AuthenticationContainer.useContainer();

// 	const [reports, setReports] = React.useState([]);

// 	const teste = 10;

// 	async function getReport(token) {
//         const responseJson = await report(token);

//         if (responseJson) {
//             const newList = responseJson.dados;
//             setReports(newList);
//             console.log("asd", newList);
//         }
// 	}
	
// 	return {reports, getReport , teste}

// }

export const ClientsContainer = createContainer(useClients);
// export const ReportContainer = createContainer(useReport);