import React from "react";
import { Sidebar } from "../../components/sidebar";
import { Header } from "../../components/header";
import "./styles.css";
import { ChargesBody } from "../../components/chargesBody";

export function Charges() {

    return (
        <div className="home">
            <Sidebar />
            <div className="main">
                <Header />
                <ChargesBody/>
            </div>
        </div>
    );
}
