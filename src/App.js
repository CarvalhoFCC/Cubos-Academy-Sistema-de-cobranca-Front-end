import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { ForgotPassword } from "./routes/forgotPassword";
import { Login } from "./routes/login";
import { Register } from "./routes/register";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Login} />
					<Route exact path="/cadastro" component={Register} />
					<Route exact path="/recuperarsenha" component={ForgotPassword} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
