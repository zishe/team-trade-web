import red from '@material-ui/core/colors/red';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
export const theme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            // type: 'dark',
            background: {
                paper: '#FFFFFF',
                default: '#E5E5E5'
            },
            text: {
                primary: '#212121',
                secondary: '#757575'
            },
            primary: {
                main: '#3F51B5',
                dark: '#303F9F',
                light: '#C5CAE9'
            },
            secondary: {
                main: '#FF4081'
            },
            error: {
                main: red.A400
            }
        }
    })
);
