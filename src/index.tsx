import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import Provider from "./Provider";
import Router from "./Router";

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline/>
        <BrowserRouter>
            <App>
                <Router disableHeaderFooter={true} />
            </App>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

