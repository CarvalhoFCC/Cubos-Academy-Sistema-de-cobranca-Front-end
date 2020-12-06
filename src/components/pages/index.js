import React from "react";
import "./styles.css";

import nextImg from "../../images/next.png";
import backImg from "../../images/back.png";

export function Pages(props) {
    return (
        <div className="chargeAndCustomerPages">
            <div>
                <button onClick={props.onClickBack}>
                    <img src={backImg} alt="Voltar página" />
                </button>
                {props.children}
                <button onClick={props.onClickNext}>
                    <img src={nextImg} alt="Avançar página" />
                </button>
            </div>
        </div>
    );
}
