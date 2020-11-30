import React from "react";
import { createContainer } from "unstated-next";
import { auth } from "../api/auth";

export const AuthenticationContainer = createContainer(() => {
    const [token, setToken] = React.useState(null);

    //   async function login(email, senha) {
    //     setToken(await auth(email, senha));
    //   }

    function login(email, senha) {
        auth({ email, senha }).then((responseJson) => {
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
