import React from "react";
import "./styles.css";
import logoutImg from "../../images/log-out.png";
import imgUser from "../../images/userSymbol.png";
import { AuthenticationContainer } from "../../utils/container/authentication";

export function UserBox() {
	const [visible, setVisible] = React.useState(false);
	const { logout } = AuthenticationContainer.useContainer();

    return (
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
    );
}
