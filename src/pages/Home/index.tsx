import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
//  will replace react-query with apollo
import { useQuery } from 'react-query';
import Grid from "@material-ui/core/Grid";

//  Components
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({

});

//interface for products for site
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


//interface for mock data from fakestoreapi.com
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
//getting mock data
const getProducts = async (): Promise<CartItemType[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json();


//Home Component
const Home: React.FC<HomeProps> = () => {
    const [ displayList, setDisplayList ] = useState([] as CartItemType[]);
    
    const {data, isLoading, error } = useQuery<CartItemType[]>(
        'products',
        getProducts
    );
    console.log(data);

    if (isLoading) return <LinearProgress />;

    return(
      <div>
          Home Page
          <Grid container spacing={2} justify="center" >      
            <Grid item xs={6} sm={4} md={2} lg={2} xl={2}>
                Grid Item
            </Grid>
          </Grid>
      </div>  
    );
}

export default Home;