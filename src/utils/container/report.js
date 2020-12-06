import React from "react";
import { createContainer } from "unstated-next";
import { report } from "../api/roport";

function useReport() {
	const [reports, setReports] = React.useState([]);

	async function getReport(token) {
        const responseJson = await report(token);

        if (responseJson) {
            const newList = responseJson.dados;
            setReports(newList);
        }
	}
	
	return {reports, getReport}

}

export const ReportContainer = createContainer(useReport);