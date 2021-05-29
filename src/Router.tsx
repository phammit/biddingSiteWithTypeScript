import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./containers/Header";
import DropDownHeader from "./containers/DropDownHeader";
import Body from "./pages/Body";
import Home from "./pages/Home";
import ListingPage from "./pages/ListingPage";

export interface RouterProps {
    //extraRoutes?: ReactNode | Node;
    disableHeaderFooter: Boolean;
}

export interface NotFoundProps {};
const NotFound: React.FC<{}> = ({})=> {
    return (<div>NotFound</div>);
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
                            <Route path="/listingpage" >
                                <Home />
                            </Route>
                            <Route path="">
                                <NotFound />    
                            </Route>
                            <Route path="/" >
                                <Home />
                            </Route>
                        </Switch>
                    </Body>
                )}
            />
        </React.Fragment>
    );
}

export default Router;