import React from "react";
import { Accordion } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
    createStyles({

    })
);

interface FilterAccordionProps {

}

const FilterAccordion: React.FC<FilterAccordionProps> = ({}) => {
    const classes = useStyles();

    return(
        <div>
            Filter Accordion for Search Results
            <Accordion>

            </Accordion>
        </div>
    );
}

export default FilterAccordion;