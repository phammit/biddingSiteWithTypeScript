import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#90a4ae'
        }
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: '#fafafa',
            }
        },
    },
})

export default theme;