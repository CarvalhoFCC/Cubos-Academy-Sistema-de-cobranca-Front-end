import React from "react";
import { createContainer } from "unstated-next";
import { auth } from "../api/auth";

export const AuthenticationContainer = createContainer(() => {
    const [token, setToken] = React.useState(localStorage.getItem("token"));

    React.useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    async function login(email, senha) {
		const responseJson = await auth({ email, senha })
		        if (responseJson) {
                const newToken = responseJson.dados.token;
                setToken(newToken);
                console.log(newToken);
            }
    }

    function logout() {
        setToken(null);
    }

    return { token, login, logout };
});
