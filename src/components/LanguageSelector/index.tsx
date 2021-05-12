import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export interface languageSelectorProps { }

//export interface myEvent {name?: string};

const LanguageSelector: React.FC<languageSelectorProps> = ({ }) => {
    const classes = useStyles();
    const [selectedLanguage, setSelectedLanguage] = React.useState('English');

    const handleChange = (event: React.ChangeEvent<{name?: string | undefined;
        value: unknown | string;}>) => {
            if (typeof event.target.value === "string") {
                    setSelectedLanguage(event.target.value);
            }
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedLanguage}
                    onChange={handleChange}
                >
                    <MenuItem value={"English"}>English</MenuItem>
                    <MenuItem value={"Francais"}>Francais</MenuItem>
                    <MenuItem value={"Deutsch"}>Deutsch</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default LanguageSelector;