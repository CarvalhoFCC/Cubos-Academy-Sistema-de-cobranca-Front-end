import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/buttons";
import { AcessScreenInput } from "../../components/acessScreenInput";
import logoCubos from "../../images/logoCubos.png";
import "./styles.css";

export function Login(props) {
    return (
        <div className="login">
            <div className="loginBox">
                <img
                    src={logoCubos}
                    alt="Logo da Cubos Academy"
                    className="blackLogo"
                />

                <form>
                    <div className="acessScreanInputsBox">
                        <AcessScreenInput label="E-mail" type="email" />
                        <AcessScreenInput label="Senha" type="password" />
                    </div>

                    <div className="esqueciMinhaSenha">
                        <Link to="*">Esqueci minha senha</Link>
                    </div>

                    <Button label="Entrar" class="invalidAcess"/>
                </form>
            </div>

            <div className="informationBelowTheLoginBox">
                Não tem conta? <Link to="*"><span>Cadastre-se!</span></Link>
            </div>
        </div>
    );
}
