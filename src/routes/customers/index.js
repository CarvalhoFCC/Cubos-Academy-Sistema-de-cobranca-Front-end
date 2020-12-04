import React from "react";
import { Sidebar } from "../../components/sidebar";
import { Header } from "../../components/header";
import "./styles.css";
import { CustomerBody } from "../../components/customerBody";


export function Customers() {

    return (
        <div className="home">
            <Sidebar />
            <div className="main">
                <Header />
                <CustomerBody />
            </div>
        </div>
    );
}
