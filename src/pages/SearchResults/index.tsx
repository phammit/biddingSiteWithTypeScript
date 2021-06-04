import React from "react";
import { makeStyles, createStyles, Grid, LinearProgress } from "@material-ui/core";
import FilterAccordion from "../../components/FilterAccordion";
import DisplaySearchResultsFakeStore from "../../components/DisplaySearchResultsFakeStore";

//  will replace react-query with apollo
import { useQuery } from 'react-query';
import { MockItemType } from "../Home";


interface SearchResultsProps {

}

//getting mock data to populate page
const getProducts = async (): Promise<MockItemType[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json();


const SearchResults: React.FC<SearchResultsProps> = ({}) => {

    const {data, isLoading, error } = useQuery<MockItemType[]>(
        'products',
        getProducts
    );

    if (isLoading) return <LinearProgress />;
    if (error) return <div>Something went wrong ....</div>

    return(
        <div>
            SearchResults
            <Grid container spacing={1}>
                <Grid item xs={1} sm={2} md={2} lg={2} xl={2} >
                    <h4>Search Results Filter Section</h4>
                    <FilterAccordion />
                    <FilterAccordion />
                    <FilterAccordion />
                </Grid>

                <Grid item xs={11} sm={10} md={10} lg={10} xl={10} >
                    <h4>Search Results Items List</h4>
                    <Grid container spacing={1}>
                        {data?.map(item => (
                            <Grid item key={item.id} xs={12} sm={4}>
                                <DisplaySearchResultsFakeStore item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};

export default SearchResults;

/**
 * TODO Build out FilterAccordion component to take arguments
 */

