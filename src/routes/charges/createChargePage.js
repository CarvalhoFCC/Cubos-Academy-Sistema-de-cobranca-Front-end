import React from "react";
import { Sidebar } from "../../components/sidebar";
import { UserBox } from "../../components/userBox";
import { CreateChargeBody } from "../../components/charges/createChargeBody";

export function CreateCharge() {

    return (
        <div className="addCostumer">
            <Sidebar />
            <section>
                <div className="addCustomerHeader">
                    <h1>// CRIAR COBRANÇA</h1>
                    <UserBox />
                </div>
				<CreateChargeBody />
            </section>
        </div>
    );
}
