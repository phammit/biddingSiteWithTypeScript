import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./containers/Header";
import DropDownHeader from "./containers/DropDownHeader";
import Body from "./pages/Body";
import Home from "./pages/Home";

export interface RouterProps {
    //extraRoutes?: ReactNode | Node;
    disableHeaderFooter: Boolean;
}

const Router: React.FC<RouterProps> = ({ disableHeaderFooter }) => {
    return(
        <React.Fragment>
            {!disableHeaderFooter &&  <Route component={Header} />}
            <Route component={DropDownHeader} />
            <Route
                render={ props => (
                    <Body {...props}>
                        <Switch>
                            <Route path="/" component={Home} exact />
                        </Switch>
                    </Body>
                )}
            />
        </React.Fragment>
    );
}

export default Router;