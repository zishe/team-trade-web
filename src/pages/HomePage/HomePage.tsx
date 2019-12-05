import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ViewVerticalContainer } from '@nareshbhatia/react-force';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(4)
    },
    section: {
        marginTop: theme.spacing(3)
    }
}));

export const HomePage = () => {
    const classes = useStyles();

    return (
        <ViewVerticalContainer>
            <Container maxWidth="lg" className={classes.container}>
                <Typography component="h1" variant="h3" color="textSecondary">
                    Groups
                </Typography>
            </Container>
        </ViewVerticalContainer>
    );
};
