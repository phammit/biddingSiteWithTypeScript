import React from "react";
import { Grid, Card, CardActions, CardContent, CardMedia, CardActionArea , Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//  Types
import { MockItemType } from "../../pages/Home";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    }
});

interface DisplayItemProps {
    item: MockItemType;
};

/**
  type MockItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}; */

const DisplayItemFakeStore: React.FC<DisplayItemProps> = ({item}) => {
    const classes = useStyles();

    return (
            <Card id={item.id.toString()} className={classes.root}>
                <CardActionArea onClick={() => {alert('clicked')}}>
                        <CardContent>
                            <CardMedia component="img" height="220" image={item.image} />
                            <Typography>
                                ${item.price}
                            </Typography>
                        </CardContent>
                </CardActionArea>
            </Card>
    );
}

export default DisplayItemFakeStore;