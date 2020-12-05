import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { chargesList } from "../../utils/api/chargesList";
import { AuthenticationContainer } from "../../utils/container/authentication";
import searchImg from "../../images/search.png";
import printerImg from "../../images/printer.png";
import pagoImg from "../../images/toggle-on.png";
import pendenteImg from "../../images/pendente.png";

export function ChargesBody() {
    // const history = useHistory();
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
                <td>{props.idDoCliente}</td>
                <td>{props.descricao}</td>
                <td>
                    R${" "}
                    {(parseFloat(props.valor) / 100).toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </td>
                <td>
                    {props.status === "PAGO" ? (
                        <div className="statusPago chargeStatus">
                            <img src={pagoImg} alt="" /> PAGO
                        </div>
                    ) : props.status === "AGUARDANDO" ? (
                        <div className="statusPendente chargeStatus">
                            <img src={pendenteImg} alt="" /> PENDENTE
                        </div>
                    ) : (
                        <span className="statusVencido chargeStatus">
                            VENCIDO
                        </span>
                    )}
                </td>
                <td>{props.vencimento}</td>
                <td>
                    <img src={printerImg} alt="imprimir" />
                </td>
            </tr>
        );
    }

    return (
        <div className="chargesBody">
            <div>
                <div className="search">
                    <input placeholder="Procurar por Nome, E-mail ou CPF" />{" "}
                    <button type="button">
                        <img src={searchImg} alt="Pesquisar Cliente" /> BUSCAR
                    </button>
                </div>
            </div>

            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Status</th>
                            <th>vencimento</th>
                            <th>Boleto</th>
                        </tr>
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
