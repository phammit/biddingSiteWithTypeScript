import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LanguageSelector from "../../components/LanguageSelector";
import CustomBar from "../../components/CustomSearchBar";
import { classicNameResolver } from "typescript";
import Theme from "../../theme";
import purple from "@material-ui/core/colors/purple";


const useStyles = makeStyles(() => createStyles({
    grow: {
        flexGrow: 1,
        //backgroundColor: '#fafafa',//purple[500]
    },  
}));

export interface headerProps {}

const Header: React.FC<headerProps> = ({}) => {
    const classes = useStyles();
    
    return(
        <div className={classes.grow}>
            <AppBar position="static">
                <ToolBar>
                    <Typography>Header</Typography>
                    <CustomBar />
                    <LanguageSelector/>
                </ToolBar>
            </AppBar>
        </div>
    );
}

export default Header;