import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({

});

export interface HomeProps {};
export interface ListingInformation {
    id?: string;
    version?: string;
    creatingDate?: string;
    listingDate?: string;
    listingType?: string;
    listingFormat?: string;
    allowOfferPrice?: boolean;
    allowBuyerSuggestedEscrow?: boolean;
    acceptableEscrows?: [string, string, string];
}

const Home: React.FC<HomeProps> = () => {
    return(
      <div>
          Home Page
      </div>  
    );
}

export default Home;