import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, LinearProgress } from "@material-ui/core";


//  will replace react-query with apollo
import { useQuery } from 'react-query';
import { MockItemType } from "../Home";
import DisplayItemFakeStore from "../../components/DisplayItemFakeStore";

interface ProductGalleryProps {

}

const useStyles = makeStyles(
    createStyles({

    })
);

//getting mock data to populate page
const getProducts = async (): Promise<MockItemType[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json();


const ProductGallery: React.FC<ProductGalleryProps> = ({}) => {
    const classes = useStyles();

    const {data, isLoading, error } = useQuery<MockItemType[]>(
        'products',
        getProducts
    );

    if (isLoading) return <LinearProgress />;
    if (error) return <div>Something went wrong ....</div>

    return(
        <div>
            <nav>
                <h1>Miners</h1>
                <div className="sort">
                    <div className="collection-sort">
                        <label>Filter by:</label>
                        <select>
                            <option value="/">All Miners</option>
                            <option value="10">Ten</option>
                        </select>
                    </div>
                    <div className="collection-sort">
                        <label>Sort by:</label>
                        <select>
                            <option value="/">Featured</option>
                        </select>
                    </div>
                </div>
            </nav>
            <section>
                <Grid container spacing={2} >  
                    {data?.map(item => (    
                        <Grid item xs={6} sm={4} md={2} lg={2} xl={2}> 
                            <DisplayItemFakeStore item={item}/>
                        </Grid>
                    ))}
                </Grid>
            </section>
        </div>
    );
}

export default ProductGallery;

