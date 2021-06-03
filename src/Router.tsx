import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import Header from "./containers/Header";
import DropDownHeader from "./containers/DropDownHeader";
import Body from "./pages/Body";
import Home from "./pages/Home";
import ListingPage from "./pages/ListingPage";
import Footer from "./containers/Footer";
import ProductGallery from "./pages/ProductGallery";
import SearchResults from "./pages/SearchResults";

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
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/listingpage" exact>
                                <ListingPage />
                            </Route>
                            <Route path="/searchresults" exact>
                                <SearchResults />
                            </Route>
                            <Route path="/productgallery" exact>
                                <ProductGallery />
                            </Route>
                            <Route path="">
                                <NotFound />    
                            </Route>
                        </Switch>
                    </Body>
                )}
            />

            {!disableHeaderFooter && <Route component={Footer} />}

        </React.Fragment>
    );
}

export default Router;