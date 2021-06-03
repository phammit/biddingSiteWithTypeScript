import React from "react";
import { makeStyles, createStyles, Grid } from "@material-ui/core";
import FilterAccordion from "../../components/FilterAccordion";

interface SearchResultsProps {

}

const SearchResults: React.FC<SearchResultsProps> = ({}) => {

    return(
        <div>
            SearchResults
            <Grid container spacing={1}>
                <Grid item xs={1} sm={2} md={2} lg={2} xl={2} >
                    <h4>Search Results Filter Section</h4>
                    
                </Grid>

                <Grid item xs={11} sm={10} md={10} lg={10} xl={10} >
                    <h4>Search Results Items List</h4>
                </Grid>
            </Grid>
        </div>
    )
};

export default SearchResults;

