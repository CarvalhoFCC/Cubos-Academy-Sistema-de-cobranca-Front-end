import React from "react";
import { AcessScreen } from "../../components/acessScreen";
import { Link } from "react-router-dom";
import { Button } from "../../components/buttons";
import { AcessScreenInput } from "../../components/acessScreenInput";
import logoCubosBlack from "../../images/logoCubos.png";

export function Register(props) {
    return (
        <div className="register">
            <AcessScreen
                extraInfo={
                    <div className="informationBelowTheLoginBox">
                        Já possui uma conta? <Link to="/">Acesse agora!</Link>
                    </div>
                }
            >
                <img src={logoCubosBlack} alt="" className="logoCubosBlac" />

                <form>
                    <div>
                        <AcessScreenInput label="nome" type="text" />
                        <AcessScreenInput label="E-mail" type="email" />
                        <AcessScreenInput label="Senha" type="password" />
                    </div>
                </form>

                <Button class="invalidAcess" label="Criar conta" />
            </AcessScreen>
        </div>
    );
}
