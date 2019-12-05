import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#304ffe'
        },
        secondary: {
            main: '#ec407a'
        },
        error: {
            main: red.A400
        }
    }
});
