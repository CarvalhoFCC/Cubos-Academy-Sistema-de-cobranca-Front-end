import React from "react";
import "./styles.css";
import { CustomerAndChargeInputs } from "../customerAndChargeInputs";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { Sidebar } from "../sidebar";
import { Button } from "../buttons";
// import { UserBox } from "../userBox";
// import { addCustomer } from "../../utils/api/addCustomer";
import { AuthenticationContainer } from "../../utils/container/authentication";
import { ClientsContainer } from "../../utils/container/clients";

// function newCustomer(nome, cpf, email, tel, token) {
//     addCustomer({ nome, cpf, email, tel }, token);
// }

export function AddCustomerBody() {
    const { register, handleSubmit, errors, trigger } = useForm({
        mode: "all",
	});
	const { newCustomer, teste } = ClientsContainer.useContainer();
	const { token } = AuthenticationContainer.useContainer();
	console.log("aqqqquiiii", teste)

    const history = useHistory();
    React.useEffect(() => trigger(), [trigger]);
    const qtdErros = Object.keys(errors).length;
    const emailInputRef = React.useRef();

    return (
        <div className="addCostumerBody">
                <div className="customerAndChargeScreen">
                    <div className="customerAndChargeScreenBox">
                        <form
                            onSubmit={handleSubmit(async (data) => {
                                await newCustomer(
                                    data.nome,
                                    data.cpf,
                                    data.email,
                                    data.tel,
                                    token
                                );
                                history.push("/customers");
                            })}
                        >
                            <CustomerAndChargeInputs
                                label="Nome"
                                name="nome"
                                type="text"
                                placeholder="Nome da cliente"
                                inputRef={register({ required: true })}
                            />
                            <CustomerAndChargeInputs
                                label="E-mail"
                                name="email"
                                type="email"
                                placeholder="email@email.com"
                                inputRef={(element) => {
                                    emailInputRef.current = element;
                                    register({
                                        required: true,
                                        validate: () => element.checkValidity(),
                                    })(element);
                                }}
                            />

                            <div className="cpfAndPhone">
                                <CustomerAndChargeInputs
                                    label="CPF"
                                    name="cpf"
                                    type="text"
                                    placeholder="000.000.000-00"
                                    inputRef={register({
                                        pattern: /\d{3}\.\d{3}\.\d{3}-\d{2}/,
                                        required: true,
                                    })}
                                />

                                <CustomerAndChargeInputs
                                    label="Telefone"
                                    name="tel"
                                    type="text"
                                    placeholder="+5571999996688"
                                    inputRef={register({
                                        pattern: /\+\d{13}/,
                                        required: true,
                                    })}
                                />
                            </div>

                            <div className="buttons">
                                <Button
                                    label="Cancelar"
									class="buttonWithoutBackground addButtonsForm"
									onClick={() => history.push("/customers")}
                                />

                                <Button
                                    disabled={qtdErros > 0}
                                    label="Adicionar Cliente"
                                    class="validAcess addButtonsForm"
                                />
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}
