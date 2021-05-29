import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
//will replace react-query with apollo
import { useQuery } from 'react-query';

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
    

    const {data, isLoading, error } = useQuery<CartItemType[]>(
        'products',
        getProducts
    );
    console.log(data);

    return(
      <div>
          Home Page
      </div>  
    );
}

export default Home;