import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/buttons";
import { AcessScreenInput } from "../../components/acessScreenInput";
import logoCubosBlack from "../../images/logoCubos.png";
import { AcessScreen } from "../../components/acessScreen";
import "./styles.css";
import { AuthenticationContainer } from "../../utils/container/authentication";
import { useForm } from "react-hook-form";

export function Login(props) {
    const { login, token } = AuthenticationContainer.useContainer();
    // const { register, handleSubmit, watch } = useForm();

    return (
        <div className="login">
            <AcessScreen
                extraInfo={
                    <div className="informationBelowTheLoginBox">
                        Não tem conta? <Link to="/cadastro">Cadastre-se!</Link>
                    </div>
                }
            >
                <img src={logoCubosBlack} alt="" className="logoCubosBlack" />

                <form
                    onSubmit={(event) => {
                        event.preventDefault();

                        login();
                    }}
                >
                    <div>
                        <AcessScreenInput label="E-mail" type="email" />
                        <AcessScreenInput label="Senha" type="password" />
                    </div>

                    <div className="esqueciMinhaSenha">
                        <Link to="/recuperarsenha">Esqueci minha senha</Link>
                    </div>

                    <Button label="Entrar" class="invalidAcess" />
                </form>
            </AcessScreen>
        </div>
    );
}
