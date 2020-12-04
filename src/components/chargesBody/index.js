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
            <li>
                {props.id}
                {"     "} {props.idDoCliente} {props.descricao} {props.valor}{" "}
                {props.vencimento}{" "}{props.linkDoBoleto}
                {props.status}
            </li>
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
                <ul>
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
                </ul>
            </section>
        </div>
    );
}
