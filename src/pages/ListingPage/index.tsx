import React from "react";
import { Grid, Breadcrumbs, Typography, Link, LinearProgress, Paper, Card } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

//carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroupProps, ArrowProps, DotProps } from "react-multi-carousel/lib/types";

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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

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
            <Grid item xs={12} >
                <Grid container spacing={3}>
                    <Grid item xs={7}>
                        <Paper>Product Column Section 1</Paper>
                        <Grid container>
                            <Grid item xs={11}>
                                <Paper>Pictures of product with Carousel</Paper>
                                <Carousel responsive={responsive}>
                                    <div>Item 1</div>
                                    <div>Item 2</div>
                                    <div>Item 3</div>
                                    <div>Item 4</div>
                                </Carousel>
                            </Grid>
                            <Grid item xs={11} justify="flex-start">
                                <Paper>Description of Item</Paper><br />
                                <Card>
                                    This is a great starter rig for cryptocurrency mining that will immediately bring in revenue with 1 (one) Nvidia RTX 3070 GPU pre-installed. It will mine 194-208MH/s out of the box with an expandable capacity of up to 600MH/s!<br /><br />
                                    This rig comes with 2 (two) Nvidia GeForce RTX 3080 GPUs and is set up to expand up to 6.<br /><br />
                                    Also included is a free setup and technical support session as needed to start earning immediately upon delivery.<br /><br />
                                    It is fully built and ready to ship.<br /><br />
                                    Just plug it in and go!<br /><br />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>Item Information Column</Paper>
                        <Grid container justify="center">

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ListingPage;