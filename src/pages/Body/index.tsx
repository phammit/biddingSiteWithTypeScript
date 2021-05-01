import React, { FC } from "react";

export interface BodyProps { }

//code copied from restorehardware ??style here or with theme??
const Body: FC<BodyProps> = props => {
    return (
        <main
            style={{
                flex: 1,
                position: "relative"
            }}
        >
            {props.children}
        </main>
    );
};

Body.defaultProps = {};

export default Body;