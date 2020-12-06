import React from "react";
import { Sidebar } from "../../components/sidebar";
import { UserBox } from "../../components/userBox";
import { EditCustomerBody } from "../../components/customers/cutomerEditBody";

export function CustomerEdit() {

    return (
        <div className="addCostumer">
            <Sidebar />
            <section>
                <div className="addCustomerHeader">
                    <h1>// EDITAR CLIENTE</h1>
                    <UserBox />
                </div>
					<EditCustomerBody />
            </section>
        </div>
    );
}
