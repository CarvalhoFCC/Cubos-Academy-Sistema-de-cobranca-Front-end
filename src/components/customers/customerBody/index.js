import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { AuthenticationContainer } from "../../../utils/container/authentication";
import { ClientsContainer } from "../../../utils/container/clients";
import { Button } from "../../buttons";
import phoneImg from "../../../images/phone.png";
import emailImg from "../../../images/email.png";
import editImg from "../../../images/edit.png";
import searchImg from "../../../images/search.png";
import { Pages } from "../../pages";

export function CustomerBody() {
    const history = useHistory();
    const { token } = AuthenticationContainer.useContainer();
    const {
        clients,
        getClients,
        customersPages,
    } = ClientsContainer.useContainer();
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        getClients(token, page);
    }, [page]);

    function ClientList(props) {
        return (
            <tr>
                <td>
                    <div>
                        <span className="nomeLine">
                            {props.nome}
                            {props.id}
                        </span>
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
                        <span className="emDia">EM DIA</span>
                    ) : (
                        <span className="inadimplente">INADIMPLENTE</span>
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
            <div>
                <Button
                    class="buttonWithoutBackground backGrey"
                    type="button"
                    onClick={() => history.push("/addcustomer")}
                    label="Adicionar cliente"
                />

                <div className="search">
                    <input placeholder="Procurar por Nome, E-mail ou CPF" />{" "}
                    <button type="button">
                        <img src={searchImg} alt="Pesquisar Cliente" /> BUSCAR
                    </button>
                </div>
            </div>

            <section>
                <table cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Cobranças Feitas</th>
                            <th>Cobranças Recebidas</th>
                            <th>Status</th>
                            <th> </th>
                        </tr>
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

            <section>
                <Pages
                    onClickBack={() => (page > 0 ? setPage(page - 1) : "")}
                    namePages={customersPages}
                    onClickNext={() =>
                        page <= customersPages.length - 1
                            ? setPage(page + 1)
                            : ""
                    }
                >
                    {customersPages.map((r, i) => {
                        return (
                            <button
                                key={i}
                                className="pagesButtons"
                                onClick={() => setPage(r)}
                            >
                                {r}
                            </button>
                        );
                    })}
                </Pages>
            </section>
        </div>
    );
}
