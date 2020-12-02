import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContainer } from "../../utils/container/authentication";

export const PrivateRoute = ({ children }) => {
    const { token } = AuthenticationContainer.useContainer();

    return (
        <Route
            render={({ location }) =>
                token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
