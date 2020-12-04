import React from "react";
import { createContainer } from "unstated-next";
import { AuthenticationContainer } from "../../utils/container/authentication";
import { report } from "../api/roport";

function useReport() {
	const { token } = AuthenticationContainer.useContainer();

	const [reports, setReports] = React.useState([]);

	const teste = 10;

	async function getReport(token) {
        const responseJson = await report(token);

        if (responseJson) {
            const newList = responseJson.dados;
            setReports(newList);
            console.log("asd", newList);
        }
	}
	
	return {reports, getReport , teste}

}

export const ReportContainer = createContainer(useReport);