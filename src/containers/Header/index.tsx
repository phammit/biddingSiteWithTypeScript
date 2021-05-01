import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";


const useStyles = makeStyles(() => ({

    })
)

export interface headerProps {}

const Header: React.FC<headerProps> = ({}) => {
    return(
        <div>
            <AppBar position="static">
                <ToolBar>
                    Header
                </ToolBar>
            </AppBar>
        </div>
    );
}

export default Header;