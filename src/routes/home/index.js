import React from "react";
import { Header } from "../../components/header";
import { HomeBody } from "../../components/homeBody";
import { Sidebar } from "../../components/sidebar";
import "./styles.css";

export function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className="main">
                <Header />
                <HomeBody />
            </div>
        </div>
    );
}
