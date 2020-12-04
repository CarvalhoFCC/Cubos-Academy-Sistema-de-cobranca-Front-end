import React from "react";
import { Link } from "react-router-dom";
import chargeImg from "../../images/charge.png";
import clientImg from "../../images/users2.png";
import "./styles.css";

function CardResult(props) {
    return (
        <div className={`result ${props.class}`}>
            <div>{props.label}</div>
            <span>{props.number}</span>
        </div>
    );
}

export function HomeBody() {
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
                            number="0"
                        />
                        <CardResult
                            class="red"
                            label="Inadiplentes"
                            number="0"
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
                            number="0"
                        />
                        <CardResult
                            class="red"
                            label="Vencidas"
                            number="0"
                        />
						<CardResult
                            class="green"
                            label="Pagas"
                            number="0"
                        />
                    </section>
                </div>
            </main>
        </div>
    );
}
