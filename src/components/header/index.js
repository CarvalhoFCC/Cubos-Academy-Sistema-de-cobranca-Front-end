import React from "react";
import "./styles.css";
import imgMoney from "../../images/moneySymbol.png";
import { UserBox } from "../userBox";
import { ReportContainer } from "../../utils/container/report";

export function Header() {
    const { reports } = ReportContainer.useContainer();

    return (
        <div className="header">
            <header>
                <div className="headerBalanceBox">
                    <div className="headerSaldoEmConta">
                        <img src={imgMoney} alt="" />
                        <span>Saldo em conta</span>
                    </div>
                    <div className="headerBalance">
                        <span>R$ {reports.saldoEmConta ? (reports.saldoEmConta/100) : ("0.00")}</span>
                    </div>
                </div>

                <UserBox />
            </header>
        </div>
    );
}
