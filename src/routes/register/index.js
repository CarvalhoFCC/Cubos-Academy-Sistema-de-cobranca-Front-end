import React from "react";
import { AcessScreen } from "../../components/acessScreen";
import { Link } from "react-router-dom";
import { Button } from "../../components/buttons";
import { AcessScreenInput } from "../../components/acessScreenInput";
import logoCubosBlack from "../../images/logoCubos.png";
import { useForm } from "react-hook-form";
import { registration } from "../../utils/api/register";

function newUser(email, senha, nome) {
    registration({ email, senha, nome }).then((responseJson) => {
        console.log(responseJson.dados.id, responseJson.status);
    });
}

export function Register(props) {
    const { register, handleSubmit } = useForm();

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

                <form
                    onSubmit={handleSubmit((data) => {
                        newUser(data.email, data.senha, data.nome);
                    })}
                >
                    <div>
                        <AcessScreenInput
                            label="nome"
                            type="text"
                            name="nome"
                            inputRef={register}
                        />
                        <AcessScreenInput
                            label="E-mail"
                            type="email"
                            name="email"
                            inputRef={register}
                        />
                        <AcessScreenInput
                            label="Senha"
                            type="password"
                            name="senha"
                            inputRef={register}
                        />
                    </div>

                    <Button class="invalidAcess" label="Criar conta" />
                </form>
            </AcessScreen>
        </div>
    );
}
