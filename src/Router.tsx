import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./containers/Header";

export interface RouterProps {
    //extraRoutes?: ReactNode | Node;
    disableHeaderFooter: Boolean;
}

const Router: React.FC<RouterProps> = ({ disableHeaderFooter }) => {
    return(
        <React.Fragment>
            {!disableHeaderFooter &&  <Route component={Header} />}
            <Route component={Header} />
        </React.Fragment>
    );
}

export default Router;