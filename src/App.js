import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ForgotPassword } from "./routes/forgotPassword";
import { Home } from "./routes/homePage";
import { Login } from "./routes/login";
import { Register } from "./routes/registerPage";
import { PrivateRoute } from "./utils/privateRoute/privateRoute";
import { AddCustomer } from "./routes/customers/addCustomerPage.js";
import { CreateCharge } from "./routes/charges/createChargePage";
import { Customers } from "./routes/customers/customersPage";
import { Charges } from "./routes/charges/chargesPage";

import { AuthenticationContainer } from "./utils/container/authentication";
import { ClientsContainer } from "./utils/container/clients";
import { ReportContainer } from "./utils/container/report";
import { ChargesContainer } from "./utils/container/charges";
import { CustomerEdit } from "./routes/customers/customerEdit";

function App() {
    return (
        <AuthenticationContainer.Provider>
            <ClientsContainer.Provider>
                <ChargesContainer.Provider>
                    <ReportContainer.Provider>
                        <BrowserRouter>
                            <div className="App">
                                <Switch>
                                    <Route exact path="/">
                                        {" "}
                                        <Login />{" "}
                                    </Route>
                                    <Route
                                        exact
                                        path="/cadastro"
                                        component={Register}
                                    />
                                    <Route
                                        exact
                                        path="/recuperarsenha"
                                        component={ForgotPassword}
                                    />

                                    <PrivateRoute exact path="/home">
                                        {" "}
                                        <Home />{" "}
                                    </PrivateRoute>
                                    <PrivateRoute exact path="/createcharge">
                                        {" "}
                                        <CreateCharge />{" "}
                                    </PrivateRoute>
                                    <PrivateRoute exact path="/addcustomer">
                                        {" "}
                                        <AddCustomer />{" "}
                                    </PrivateRoute>
									<PrivateRoute exact path="/customeredit">
                                        {" "}
                                        <CustomerEdit />{" "}
                                    </PrivateRoute>
                                    <PrivateRoute exact path="/customers">
                                        {" "}
                                        <Customers />{" "}
                                    </PrivateRoute>
                                    <PrivateRoute exact path="/charges">
                                        {" "}
                                        <Charges />{" "}
                                    </PrivateRoute>
                                </Switch>
                            </div>
                        </BrowserRouter>
                    </ReportContainer.Provider>
                </ChargesContainer.Provider>
            </ClientsContainer.Provider>
        </AuthenticationContainer.Provider>
    );
}

export default App;
