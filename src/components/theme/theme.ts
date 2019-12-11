import red from '@material-ui/core/colors/red';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
export const theme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#3f51b5'
            },
            secondary: {
                main: '#ec407a'
            },
            error: {
                main: red.A400
            }
        }
    })
);
