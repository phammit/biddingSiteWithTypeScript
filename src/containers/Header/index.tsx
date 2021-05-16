import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import LanguageSelector from "../../components/LanguageSelector";
import Typography from "@material-ui/core/Typography";
import CustomBar from "../../components/CustomSearchBar";


const useStyles = makeStyles(() => ({

    })
)

export interface headerProps {}

const Header: React.FC<headerProps> = ({}) => {
    return(
        <div>
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