import React from "react";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";
import "./styles.css";

export function Home() {
    return (
        <div className="home">
            <Sidebar />
			<Header />
        </div>
    );
}
