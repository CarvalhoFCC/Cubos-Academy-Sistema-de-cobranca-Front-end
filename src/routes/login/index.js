import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/buttons";
import { AcessScreenInput } from "../../components/acessScreenInput";
import logoCubosBlack from "../../images/logoCubos.png";
import { AcessScreen } from "../../components/acessScreen";
import "./styles.css";
import { AuthenticationContainer } from "../../utils/container/authentication";
import { useForm } from "react-hook-form";

export function Login(props, ref) {
    const { login, token } = AuthenticationContainer.useContainer();
    const { register, handleSubmit, errors, trigger } = useForm({
        mode: "all",
	});
	
    const history = useHistory();

    React.useEffect(() => trigger(), [trigger]);

    const qtdErros = Object.keys(errors).length;

	const emailInputRef = React.useRef();

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
                    onSubmit={handleSubmit(async (data) => {
						await login(data.email, data.senha);
						console.log(token)
                        history.push("/home");
                    })}
                >
                    <AcessScreenInput
                        label="E-mail"
                        name="email"
                        type="email"
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
                        name="senha"
                        type="password"
                        inputRef={register({ required: true })}
                    />

                    <div className="esqueciMinhaSenha">
                        <Link to="/recuperarsenha">Esqueci minha senha</Link>
                    </div>

                    <Button
                        disabled = {qtdErros > 0}
                        label="Entrar"
                        class="validAcess"
                    />
                </form>
            </AcessScreen>
        </div>
    );
}
