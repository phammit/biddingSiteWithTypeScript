import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography, Link } from "@material-ui/core";

interface FooterProps {

}

const useStyles = makeStyles(
    createStyles({

    })
);

const Footer: React.FC<FooterProps> = ({}) => {
    const classes = useStyles();
    const preventDefault= (event: React.SyntheticEvent) => event.preventDefault();

    return(
        <Grid container  justify="center">
            <Grid item >
                <Typography >
                    <Link href="#" onClick={preventDefault}>
                        About BiteSite
                    </Link>
                    <Link href="#" onClick={preventDefault} color="inherit">
                        Announcements
                    </Link>
                    <Link href="#" onClick={preventDefault} variant="body2">
                        Community
                    </Link>
                    <Link href="#" onClick={preventDefault} variant="body2">
                        Security Center
                    </Link>
                    <Link href="#" onClick={preventDefault} variant="body2">
                        Policies
                    </Link>
                    <Link href="#" onClick={preventDefault} variant="body2">
                        Help & Contact
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer;