import * as React from "react";
import SearchBar from "material-ui-search-bar";
//using materila-ui-search-bar package.. need to typescript it..should have 
//built in type declarations

export interface searchBarProps {}

const CustomSearchBar: React.FC<searchBarProps> = ({}) => {
    const [value, setValue] = React.useState('');
    const updateValue = () => {}

    const doSomethingWith = (value: string) => {}

    return(
        <SearchBar
            value={value}
            onChange={updateValue}
            onRequestSearch={() => doSomethingWith(value)}
        />
    );
}

export default CustomSearchBar;