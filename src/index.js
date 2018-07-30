import "./index.scss";
import * as ROUTES from "./common/routes";
import { Route, Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";
import React from "react";
import customHistory from "./common/history";
import store from "./common/store";
import LoadingSpinner from "./container/LoadingSpinner";
import HomePage from "./container/HomePage";
import WhoWeArePage from "./container/WhoWeArePage";
import VisionPage from "./container/VisionPage";
import CredoPage from "./container/CredoPage";
import PastorPage from "./container/PastorPage";



const App = () => {
    return (
        <Provider store={store}>
            <Router history={customHistory}>
                <div>
                    <LoadingSpinner/>
                    <Switch>
                        <Route
                            exact
                            component={HomePage}
                            path={ROUTES.HOME}
                        />

                        <Route
                            component={HomePage}
                            path="/start"
                        />
                        <Route
                            component={WhoWeArePage}
                            path="/whoweare"
                        />
                        <Route
                            component={VisionPage}
                            path="/vision"
                        />
                        <Route
                            component={CredoPage}
                            path="/credo"
                        />
                        <Route
                            component={PastorPage}
                            path="/pastor"
                        />
                        
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
};

const rootEl = document.getElementById("root");
render(<App/>, rootEl);
