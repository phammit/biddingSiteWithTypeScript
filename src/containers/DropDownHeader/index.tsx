import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
    createStyles({

    }),
);

export interface DropDownProps {

};

const DropDownHeader: React.FC<DropDownProps> = ({}) => {
    return(
        <div>
            DropDownHeader!!!!!!
        </div>
    );
}

export default DropDownHeader;