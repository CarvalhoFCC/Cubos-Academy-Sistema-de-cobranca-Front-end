import React from "react";
import "./styles.css";
import imgUser from "../../images/userSymbol.png";
import imgMoney from "../../images/moneySymbol.png";
import logoutImg from "../../images/log-out.png";
import { AuthenticationContainer } from "../../utils/container/authentication";

export function Header() {
	const [visible, setVisible] = React.useState(false);
	const { logout } = AuthenticationContainer.useContainer();

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

                <div className="userBox">
                    <button
                        type="button"
                        className="userButton"
                        onClick={() => setVisible((v) => !v)}
                    >
                        <img src={imgUser} alt="Usuário" />
                    </button>

                    {visible ? (
                        <button
                            className="logoutButton"
                            onClick={() => logout()}
                        >
                            <div>
                                <img src={logoutImg} alt="Sair" />
                                <span>Deslogar</span>
                            </div>
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </header>
        </div>
    );
}
