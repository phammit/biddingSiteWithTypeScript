import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//styles
import { makeStyles, createStyles } from "@material-ui/styles";
import { Link as RouterLink } from "react-router-dom";



const useStyles = makeStyles(() => createStyles({

    }),
);

export interface DropDownProps {

};

const pages = [
    "miners",
    "computers",
    "graphic cards",
    "electronics",
    "cool stuff"
];

const DropDownHeader: React.FC<DropDownProps> = ({}) => {
    const classes = useStyles();

    return(
        <Container>
            <Grid container justify="space-evenly">
                {pages.map(item => (
                    <Grid item>
                        <Button variant="contained" component={RouterLink} to={"/" + item}>{item}</Button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default DropDownHeader;