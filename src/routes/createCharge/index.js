import React from "react";
// import { CustomerAndChargeInputs } from "../../components/customerAndChargeInputs";
// import { Link, useHistory } from "react-router-dom";
// import { useForm } from "react-hook-form";
import { Sidebar } from "../../components/sidebar";
// import { Button } from "../../components/buttons";
import { UserBox } from "../../components/userBox";
import { CreateChargeBody } from "../../components/createChargeBody";

export function CreateCharge() {
    // const { register, handleSubmit, errors, trigger, watch } = useForm({
    //     mode: "all",
    // });

    // const history = useHistory();

    // React.useEffect(() => trigger(), [trigger]);

    // const qtdErros = Object.keys(errors).length;

    return (
        <div className="addCostumer">
            <Sidebar />
            <section>
                <div className="addCustomerHeader">
                    <h1>// CRIAR COBRANÇA</h1>
                    <UserBox />
                </div>
				<CreateChargeBody />
                {/* <div className="customerAndChargeScreen">
                    <div className="customerAndChargeScreenBox">
                        <form
                            onSubmit={handleSubmit((data) => {
                                history.push("/home");
                            })}
                        >

                            <CustomerAndChargeInputs
                                label="Cliente"
                                name="cliente"
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
                                name="data"
                                type="date"
                                inputRef={register({
                                    pattern: /\d{4}-\d{2}-\d{2}/,
                                    required: true,
                                })}
                            />
							</div>	

							<div>	
							<Button
                                disabled={qtdErros > 0}
                                label="Entrar"
                                class="validAcess"
                            />

                            <Button
                                disabled={qtdErros > 0}
                                label="Entrar"
                                class="validAcess"
                            />
							</div>
                        </form>
                    </div>
                </div> */}
            </section>
        </div>
    );
}
