import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import Provider from "./Provider";
import Router from "./Router";

ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <CssBaseline/>
            <BrowserRouter>
                <App>
                    <Router disableHeaderFooter={false} />
                </App>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

