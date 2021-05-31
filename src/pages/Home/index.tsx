import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
//  will replace react-query with apollo
import { useQuery } from 'react-query';
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

//  Components
import DisplayItemFakeStore from "../../components/DisplayItemFakeStore";

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
export type MockItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
//getting mock data
const getProducts = async (): Promise<MockItemType[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json();


//Home Component
const Home: React.FC<HomeProps> = () => {
    const [ displayList, setDisplayList ] = useState([] as MockItemType[]);
    
    const {data, isLoading, error } = useQuery<MockItemType[]>(
        'products',
        getProducts
    );
    console.log(data);

    if (isLoading) return <LinearProgress />;
    if (error) return <div>Something went wrong ....</div>

    return(
      <div>
          Home Page
          <Grid container spacing={2} >  
            {data?.map(item => (    
                <Grid item xs={6} sm={4} md={2} lg={2} xl={2}> 
                    <DisplayItemFakeStore item={item}/>
                </Grid>
            ))}
          </Grid>
      </div>  
    );
}

export default Home;