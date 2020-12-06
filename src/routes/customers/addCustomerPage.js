import React from "react";
import { Sidebar } from "../../components/sidebar";
import { UserBox } from "../../components/userBox";
import { AddCustomerBody } from "../../components/customers/addCustomerBody";

export function AddCustomer() {

    return (
        <div className="addCostumer">
            <Sidebar />
            <section>
                <div className="addCustomerHeader">
                    <h1>// ADICIONAR CLIENTE</h1>
                    <UserBox />
                </div>
					<AddCustomerBody />
            </section>
        </div>
    );
}
