import React from "react";
import { Link } from "react-router-dom";
import chargeImg from "../../images/charge.png";
import clientImg from "../../images/users2.png";
import "./styles.css";
import { AuthenticationContainer } from "../../utils/container/authentication";
import { report } from "../../utils/api/roport";
import { ReportContainer } from "../../utils/container/report";

function CardResult(props) {
    return (
        <div className={`result ${props.class}`}>
            <div>{props.label}</div>
            <span>{props.number}</span>
        </div>
    );
}

export function HomeBody() {
	const { token } = AuthenticationContainer.useContainer();
	const { reports, getReport } = ReportContainer.useContainer();

    React.useEffect(() => {
        getReport(token);
    }, []);

    return (
        <div className="homeBody">
            <header>
                <Link to="/home" className="select">
                    Este mês
                </Link>
                <Link to="/home">Este ano</Link>
                <Link to="/home">Desde o início</Link>
            </header>
            <main>
                <div className="card">
                    <header>
                        <div>
                            <img src={clientImg} alt="" />
                            <span>Clientes</span>
                        </div>
                    </header>
                    <section>
                        <CardResult
                            class="green"
                            label="Em dia"
                            number={reports.qtdClientesAdimplentes}
                        />
                        <CardResult
                            class="red"
                            label="Inadiplentes"
                            number={reports.qtdClientesInadimplentes}
                        />
                    </section>
                </div>

                <div className="card">
                    <header>
                        <div>
                            <img src={chargeImg} alt="" />
                            <span>Cobranças</span>
                        </div>
                    </header>
                    <section>
                        <CardResult
                            class="blue"
                            label="Previstas"
                            number={reports.qtdBoletosNaoPagos}
                        />
                        <CardResult
                            class="red"
                            label="Vencidas"
                            number={reports.qtdBoletosVencidos}
                        />
						<CardResult
                            class="green"
                            label="Pagas"
                            number={reports.qtdBoletosPagos}
                        />
                    </section>
                </div>
            </main>
        </div>
    );
}
