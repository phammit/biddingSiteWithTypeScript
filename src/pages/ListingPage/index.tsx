import React from "react";
import { Grid, Breadcrumbs, Typography, Link, LinearProgress } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";


//  will replace react-query with apollo
import { useQuery } from 'react-query';
//mock item type
import { MockItemType } from "../Home";

/**
  export type MockItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
  };
 */


interface ListingPageProps {};

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("clicked a breadcrumb");
}

//getting mock data to populate page
const getProducts = async (): Promise<MockItemType[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json();

const ListingPage: React.FC<ListingPageProps> = ({}) => {

    const {data, isLoading, error } = useQuery<MockItemType[]>(
        'products',
        getProducts
    );
    if (isLoading) return <LinearProgress />;
    if (error) return <div>Something went wrong ....</div>

    return (
        <Grid container spacing={6} justify="center">
            <Grid item xs={12}>
                <Grid container>
                    <Grid item justify="flex-start" >
                        <Breadcrumbs aria-label="breadcrumb" 
                            separator={<NavigateNextIcon fontSize="small" />} >
                            <Link color="inherit" href="/" onClick={handleClick}>
                                BideSite
                            </Link>
                            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                                Main Type
                            </Link>
                            <Typography color="textPrimary">ListingPage</Typography>
                            {data?.map(item => <Typography>{item.title}</Typography>)}
                        </Breadcrumbs>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ListingPage;