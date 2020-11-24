import React from "react";
import "./styles.css";
import imgUser from "../../images/userSymbol.png";
import imgMoney from "../../images/moneySymbol.png";


export function Header() {
    return (
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
			<img src={imgUser} alt="Usuário" className="imgUser" />
		</header>
    );
}
