import React from "react";
import "./styles.css";
import logoCubosWhite from "../../images/logoCubos2.png";
import homeImg from "../../images/home.png";
import chargeImg from "../../images/charge.png";
import clientImg from "../../images/client.png";
import { Link } from "react-router-dom";
import { Button } from "../buttons";

export function SideBar(props) {
    return (
        <aside className="sideBar">
            <div>
                <img src={logoCubosWhite} alt="" className="logoCubosWhite" />

                <nav>
                    <ul>
                        <li>
                            <Link to="/home">
                                <div className="imgBoxSideBar">
                                    <img src={homeImg} alt="Link para Home" />
                                </div>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home">
                                <div className="imgBoxSideBar">
                                    <img
                                        src={chargeImg}
                                        alt="Link para Cobranças"
                                    />
                                </div>
                                <span>Cobranças</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home">
                                <div className="imgBoxSideBar">
                                    <img
                                        src={clientImg}
                                        alt="Link para Clientes"
                                    />
                                </div>
                                <span>Clientes</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Button label="Criar cobrança" class="validAcess" />
        </aside>
    );
}
