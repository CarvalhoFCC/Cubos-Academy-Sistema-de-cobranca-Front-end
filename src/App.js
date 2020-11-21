import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Login } from "./routes/login";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
