import React from "react";
import { Button } from "../../components/buttons";
import { AcessScreenInput } from "../../components/acessScreenInput";
import logoCubosBlack from "../../images/logoCubos.png";
import { AcessScreen } from "../../components/acessScreen";
import "./styles.css";

export function ForgotPassword(props) {
    return (
        <div className="forgotPassword">
            <AcessScreen>
                <img src={logoCubosBlack} alt="" className="logoCubosBlack" />

                <p>
                    Informe o e-mail associado a sua conta e vamos te enviar
                    instruções para resetar sua senha
                </p>

                <form>
                    <div>
                        <AcessScreenInput label="E-mail" type="email" />
                    </div>

                    <Button label="Recuperar senha" class="invalidAcess" />
                </form>
            </AcessScreen>
        </div>
    );
}
