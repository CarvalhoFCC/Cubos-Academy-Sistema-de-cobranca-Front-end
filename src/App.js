import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { ForgotPassword } from "./routes/forgotPassword";
import { Home } from "./routes/home";
import { Login } from "./routes/login";
import { Register } from "./routes/register";
import { AuthenticationContainer } from "./utils/container/authentication";



function App() {
    return (
        <AuthenticationContainer.Provider>
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/">
                            {" "}
                            <Login />{" "}
                        </Route>
                        <Route exact path="/cadastro" component={Register} />
                        <Route
                            exact
                            path="/recuperarsenha"
                            component={ForgotPassword}
                        />
                        <Route exact path="/home" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        </AuthenticationContainer.Provider>
    );
}

export default App;
