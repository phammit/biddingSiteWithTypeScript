import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
//TODO import { ApolloProvider } from "@apollo/react-hooks";

export interface ProviderProps {
    children: any;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default Provider;