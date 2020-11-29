import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/buttons";
import { AcessScreenInput } from "../../components/acessScreenInput";
import logoCubosBlack from "../../images/logoCubos.png";
import { AcessScreen } from "../../components/acessScreen";
import "./styles.css";
import { AuthenticationContainer } from "../../utils/container/authentication";
import { useForm } from "react-hook-form";

export function Login(props, ref) {
    const { login, token } = AuthenticationContainer.useContainer();
    const { register, handleSubmit } = useForm();

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
                    onSubmit={handleSubmit((data) => {
						console.log(data.email, data.senha);
						login(data.email, data.senha);
                    })}
                >
                  
                    <AcessScreenInput
                        label="E-mail"
                        name="email"
						type="email"
						inputRef={register}
                    />
                    <AcessScreenInput
                        label="Senha"
                        name="senha"
						type="password"
						inputRef={register}
                    />

                    <div className="esqueciMinhaSenha">
                        <Link to="/recuperarsenha">Esqueci minha senha</Link>
                    </div>

                    <Button label="Entrar" class="invalidAcess" />
                </form>
            </AcessScreen>
        </div>
    );
}
