import React from "react";
import { Accordion, AccordionSummary, Typography, AccordionDetails, 
FormGroup, FormControlLabel } from "@material-ui/core";
import { Favorite, ExpandMore, FavoriteBorder } from "@material-ui/icons";
import CheckBoxIcon from "@material-ui/icons/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import CheckBoxOutlilneBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { green } from "@material-ui/core/colors";


const useStyles = makeStyles(
    createStyles({

    })
);

interface FilterAccordionProps {

}

const FilterAccordion: React.FC<FilterAccordionProps> = ({}) => {
    const classes = useStyles();
    //cor accorion
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    }
    //for checkboxes'
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
        checkedE: true,
    });
    //for checkbox function
    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const GreenCheckbox = withStyles(
        {
            root: {
                color: green[400],
                '&$checked': {
                    color: green[600],
                },
            },
            checked: {},
        }
    )((props: CheckboxProps) => <Checkbox color="default" {...props} />);

    return(
        <div>
            Filter Accordion for Search Results
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography display='block'>General settings</Typography>  
                </AccordionSummary>
                <AccordionDetails>
                <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleCheck} name="checkedA" />}
                            label="Secondary"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.checkedB}
                                    onChange={handleCheck}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Primary"
                        />
                        <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
                        <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
                        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={state.checkedD}
                                    onChange={handleCheck}
                                    name="checkedF"
                                    indeterminate
                                />
                            }
                            label="Indeterminate"
                        />
                        <FormControlLabel
                            control={<GreenCheckbox checked={state.checkedD} onChange={handleCheck} name="checkedD" />}
                            label="Custom color"
                        />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                            label="Custom icon"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    name="checkedI"
                                />
                            }
                            label="Custom size"
                        />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default FilterAccordion;