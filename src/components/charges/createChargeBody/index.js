import React from "react";
import "./styles.css";
import { CustomerAndChargeInputs } from "../../customerAndChargeInputs";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "../../buttons";
import { ChargesContainer } from "../../../utils/container/charges";
import { AuthenticationContainer } from "../../../utils/container/authentication";
import { ClientsContainer } from "../../../utils/container/clients";

export function CreateChargeBody() {
    const { register, handleSubmit, errors, trigger } = useForm({
        mode: "all",
    });
    const { newCharge } = ChargesContainer.useContainer();
    const { token } = AuthenticationContainer.useContainer();
    const {
        clients,
        getClients,
        customersPages,
    } = ClientsContainer.useContainer();
    const [page, setPage] = React.useState(1);

    let amount = 999999;

    React.useEffect(() => {
        getClients(token, page, amount);
    }, []);

    React.useEffect(() => trigger(), [trigger]);

    const history = useHistory();

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
                    <label className="selectCreatCharge">
						<span>Cliente</span>
                        <select name="idDoCliente" ref={register({ required: true })}>
                            <option>Selecione o cliente</option>
                            {clients.map((client, i) => {
                                return (
                                    <option key={client.id} value={client.id}>
                                        {client.nome}
                                    </option>
                                );
                            })}
                        </select>
                    </label>

                    <CustomerAndChargeInputs
                        label="Descrição"
                        name="descricao"
                        type="text"
                        inputRef={register({ required: true })}
                    />
                    <div>A descrição informada será impressa no boleto.</div>

                    <div className="valueEndExpiresDate">
                        <div>
                            <CustomerAndChargeInputs
                                label="Valor"
                                name="valor"
                                type="text"
                                placeholder="0,00"
                                inputRef={register({ required: true })}
                            />
                        </div>
                        <div>
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
                    </div>

                    <div className="buttonsSpaceCreateCharges">
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
