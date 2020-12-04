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

    async function getClients(token, page) {
        const responseJson = await chargesList(token, page);

        if (responseJson) {
            const newList = responseJson.dados.cobrancas;
            setCharges(newList);
            console.log("asd", newList);
        }
    }

    React.useEffect(() => {
        getClients(token, page);
    }, [page]);

    function ClientList(props) {
        return (
            <li>
                {props.id}
                {"     "} {props.nome} {props.email} {props.cobrancasFeitas}{" "}
                {props.cobrancasRecebidas}{" "}
                {props.estaInadiplente === false ? "ok" : "inaiplente"}
            </li>
        );
    }

    return (
        <div className="chargesBody">
            <Button
                class="buttonWithoutBackground"
                type="button"
				onClick={() => history.push("/addcustomer")}
				label="Adicionar cliente"
            />

            <section>
                <ul>
                    {[].map((r) => {
                        return (
                            <ClientList
                                key={r.id}
                                id={r.id}
                                nome={r.nome}
                                email={r.email}
                                cobrancasFeitas={r.cobrancas_total}
                                cobrancasRecebidas={r.cobrancas_pago}
                                estaInadiplente={r.inadimplente}
                            />
                        );
                    })}
                </ul>
            </section>
        </div>
    );
}
