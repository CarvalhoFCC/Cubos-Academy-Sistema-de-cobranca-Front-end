import React from "react";
import "./styles.css";
import imgMoney from "../../images/moneySymbol.png";
import { UserBox } from "../userBox";

export function Header() {
	
	
    return (
        <div className="header">
            <header>
                <div className="headerBalanceBox">
                    <div className="headerSaldoEmConta">
                        <img src={imgMoney} alt="" />
                        <span>Saldo em conta</span>
                    </div>
                    <div className="headerBalance">
                        <span>R$ 0,00</span>
                    </div>
                </div>

                <UserBox/>
            </header>
        </div>
    );
}
