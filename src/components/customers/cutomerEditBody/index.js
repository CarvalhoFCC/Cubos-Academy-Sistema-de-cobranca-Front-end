import React from "react";
import "./styles.css";
import { CustomerAndChargeInputs } from "../../customerAndChargeInputs";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "../../buttons";
import { AuthenticationContainer } from "../../../utils/container/authentication";
import { ClientsContainer } from "../../../utils/container/clients";

export function EditCustomerBody() {
    const { register, handleSubmit, errors, trigger } = useForm({
        mode: "all",
	});
	const { editCustomer } = ClientsContainer.useContainer();
	const { token } = AuthenticationContainer.useContainer();

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
                                await editCustomer(
									data.id,
									data.nome,
                                    data.cpf,
                                    data.email,
                                    token
                                );
                                history.push("/customers");
                            })}
                        >
                            <CustomerAndChargeInputs
                                label="Nome"
                                name="id"
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
									type="button"
									onClick={() => history.push("/customers")}
                                />

                                <Button
                                    disabled={qtdErros > 0}
                                    label="Salvar Alterações"
                                    class="validAcess addButtonsForm"
                                />
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}
