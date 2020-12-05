import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { chargesList } from "../../utils/api/chargesList";
import { AuthenticationContainer } from "../../utils/container/authentication";
import { Button } from "../buttons";

export function ChargesBody() {
    const history = useHistory();
    const { token } = AuthenticationContainer.useContainer();
    const [charges, setCharges] = React.useState([]);
    const [page, setPage] = React.useState(0);

    async function getCharges(token, page) {
        const responseJson = await chargesList(token, page);

        if (responseJson) {
            const newList = responseJson.dados.cobrancas;
            setCharges(newList);
            console.log("asd", newList);
        }
    }

    React.useEffect(() => {
        getCharges(token, page);
    }, [page]);

    function ChargesList(props) {
        return (
            <tr>
				<td>{props.id}</td>
				<td>{props.idDoCliente}</td>
				<td>{props.descricao}</td>
				<td>{props.valor}</td>
				<td>{props.vencimento}</td>
				<td>{props.linkDoBoleto}</td>
            </tr>
        );
    }

    return (
        <div className="chargesBody">
            <div>
				<div>
					<input /> <button type="button">IMG BUSCAR</button>
				</div>
			</div>



            <section>
				<table>
					<thead>
						<td>Cliente</td>
						<td>Descrição</td>
						<td>Valor</td>
						<td>Status</td>
						<td>vencimento</td>
						<td>Boleto</td>
					</thead>
					<tbody>
					{charges.map((r) => {
                        return (
                            <ChargesList
                                key={r.id}
                                id={r.id}
                                idDoCliente={r.iddocliente}
                                descricao={r.descricao}
                                valor={r.valor}
                                vencimento={r.vencimento}
								linkDoBoleto={r.linkdoboleto}
								status={r.status}
                            />
                        );
                    })}
					</tbody>                
				</table>
            </section>
        </div>
    );
}
