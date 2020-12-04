import React from "react";
import { AcessScreen } from "../../components/acessScreen";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/buttons";
import { AcessScreenInput } from "../../components/acessScreenInput";
import logoCubosBlack from "../../images/logoCubos.png";
import { useForm } from "react-hook-form";
import { registration } from "../../utils/api/register";

export function Register(props, ref) {
    const { register, handleSubmit, errors, trigger } = useForm({
        mode: "all",
    });

    const history = useHistory();

    const qtdErros = Object.keys(errors).length;

    React.useEffect(() => trigger(), [trigger]);

    const emailInputRef = React.useRef();

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
                    onSubmit={handleSubmit(async (data) => {
                        await registration(data.email, data.senha, data.nome);
                        history.push("/");
                    })}
                >
                    <div>
                        <AcessScreenInput
                            label="nome"
                            type="text"
                            name="nome"
                            inputRef={register({ required: true })}
                        />
                        <AcessScreenInput
                            label="E-mail"
                            type="email"
                            name="email"
                            inputRef={(element) => {
                                emailInputRef.current = element;
                                register({
                                    required: true,
                                    validate: () => element.checkValidity(),
                                })(element);
                            }}
                        />
                        <AcessScreenInput
                            label="Senha"
                            type="password"
                            name="senha"
                            inputRef={register({ required: true })}
                        />
                    </div>

                    <Button
                        disabled={qtdErros > 0}
                        class="validAcess"
                        label="Criar conta"
                    />
                </form>
            </AcessScreen>
        </div>
    );
}
