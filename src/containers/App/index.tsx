import React from "react";
import { CSSProperties } from "react";

export interface AppProps {
    rootStyle?: CSSProperties;
}

const App: React.FC<AppProps> = ({children, rootStyle}) => {
    return  (
        <div>
            {children}
        </div>
    );
}

export default App;