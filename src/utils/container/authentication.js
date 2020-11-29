import React from "react";
import { createContainer } from "unstated-next";
import { auth } from "../api/auth";

export const AuthenticationContainer = createContainer(() => {
    const [token, setToken] = React.useState(null);
    const email = "lulis@gmail.com";
    const password = "152";

    //   async function login(email, senha) {
    //     setToken(await auth(email, senha));
    //   }

    function login() {
        auth({ email, senha: password }).then((responseJson) => {
            const newToken = responseJson.dados.token;
            setToken(newToken);
            console.log(newToken);
        });
	}
	
    function logout() {
        setToken(null);
    }

    return { token, login, logout };
});
