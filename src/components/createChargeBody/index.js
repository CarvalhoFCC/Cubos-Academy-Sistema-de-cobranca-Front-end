import React from "react";
import { CustomerAndChargeInputs } from "../../components/customerAndChargeInputs";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "../../components/buttons";
import { ChargesContainer } from "../../utils/container/charges";
import { AuthenticationContainer } from "../../utils/container/authentication";

export function CreateChargeBody() {
    const { register, handleSubmit, errors, trigger } = useForm({
        mode: "all",
    });
    const { newCharge } = ChargesContainer.useContainer();
    const { token } = AuthenticationContainer.useContainer();

    const history = useHistory();

    React.useEffect(() => trigger(), [trigger]);

    const qtdErros = Object.keys(errors).length;

    return (
        <div className="customerAndChargeScreen">
            <div className="customerAndChargeScreenBox">
                <form
                    onSubmit={handleSubmit(async (data) => {
                        await newCharge(
                            data.idDoCliente,
                            data.descricao,
                            data.valor,
                            data.vencimento,
                            token
                        );
                        history.push("/charges");
                    })}
                >
                    <CustomerAndChargeInputs
                        label="Cliente"
                        name="idDoCliente"
                        type="text"
                        placeholder="Selecione a cliente"
                        inputRef={register({ required: true })}
                    />

                    <CustomerAndChargeInputs
                        label="Descrição"
                        name="descricao"
                        type="text"
                        inputRef={register({ required: true })}
                    />
                    <div>A descrição informada será impressa no boleto.</div>

                    <div>
                        <CustomerAndChargeInputs
                            label="Valor"
                            name="valor"
                            type="text"
                            placeholder="0,00"
                            inputRef={register({ required: true })}
                        />

                        <CustomerAndChargeInputs
                            label="Vencimento"
                            name="vencimento"
                            type="date"
                            inputRef={register({
                                pattern: /\d{4}-\d{2}-\d{2}/,
                                required: true,
                            })}
                        />
                    </div>

                    <div>
                        <Button
                            label="Cancelar"
                            class="buttonWithoutBackground addButtonsForm"
                            type="button"
                            onClick={() => history.push("/charges")}
                        />

                        <Button
                            disabled={qtdErros > 0}
                            label="Criar Cobrança"
                            class="validAcess"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
