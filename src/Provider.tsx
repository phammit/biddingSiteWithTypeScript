import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
//TODO import { ApolloProvider } from "@apollo/react-hooks";
//using QueryClient from react-query for now
import { QueryClient, QueryClientProvider } from "react-query";

export interface ProviderProps {
    children: any;
}

const client = new QueryClient();

const Provider: React.FC<ProviderProps> = ({ children }) => {
    return(
        <QueryClientProvider client={client}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default Provider;