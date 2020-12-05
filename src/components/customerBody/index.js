import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { customerList } from "../../utils/api/customerList";
import { AuthenticationContainer } from "../../utils/container/authentication";
import { Button } from "../buttons";
import phoneImg from "../../images/phone.png";
import emailImg from "../../images/email.png";
import editImg from "../../images/edit.png";

export function CustomerBody() {
    const history = useHistory();
    const { token } = AuthenticationContainer.useContainer();
    const [clients, setClients] = React.useState([]);
    const [page, setPage] = React.useState(0);

    async function getClients(token, page) {
        const responseJson = await customerList(token, page);

        if (responseJson) {
            const newList = responseJson.dados.clientes;
            setClients(newList);
            console.log("asd", newList);
        }
    }

    React.useEffect(() => {
        getClients(token, page);
    }, [page]);

    function ClientList(props) {
        return (
            <tr>
                <td>
                    <div>
                        <span>{props.nome}</span>
                        <div className="emailLine">
                            {" "}
                            <img src={emailImg} alt="" /> {props.email}
                        </div>
                        <div className="phoneLine">
                            {" "}
                            <img src={phoneImg} alt="" /> Vocês não passaram o
                            telefone
                        </div>
                    </div>
                </td>
                <td>
                    R${" "}
                    {(parseFloat(props.cobrancasFeitas) / 100).toLocaleString(
                        "pt-BR",
                        {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }
                    )}
                </td>
                <td>
                    R${" "}
                    {(
                        parseFloat(props.cobrancasRecebidas) / 100
                    ).toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </td>
                <td>
                    {props.estaInadiplente === false ? (
                        <span>EM DIA</span>
                    ) : (
                        <span>INADIMPLENTE</span>
                    )}
                </td>
                <td>
                    <img src={editImg} alt="" />
                </td>
            </tr>
        );
    }

    return (
        <div className="customerBody">
            <Button
                class="buttonWithoutBackground"
                type="button"
                onClick={() => history.push("/addcustomer")}
                label="Adicionar cliente"
            />

            <section>
                <table cellSpacing={0}>
                    <thead>
                        <th>Cliente</th>
                        <th>Cobranças Feitas</th>
                        <th>Cobranças Recebidas</th>
                        <th>Status</th>
                        <th> </th>
                    </thead>
                    <tbody>
                        {clients.map((r) => {
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
                    </tbody>
                </table>
            </section>
        </div>
    );
}
