import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ViewVerticalContainer } from '@nareshbhatia/react-force';
import GoogleLogin from 'react-google-login';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { GoogleWebLogin } from '../../graphql-types';
import { login } from './__generated__/login';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(4)
    },
    section: {
        marginTop: theme.spacing(3)
    }
}));

const AUTH = gql`
    mutation login($info: GoogleWebLogin!) {
        login(info: $info) {
            success
            authData {
                jwt
                userId
            }
        }
    }
`;

export const HomePage = () => {
    const classes = useStyles();
    const [login, { data, error }] = useMutation<login, { info: GoogleWebLogin }>(AUTH);

    console.log(data, error);

    const response = async (info: any) => {
        try {
            const selected = {
                accessToken: info.accessToken,
                googleId: info.googleId,
                tokenId: info.tokenId,
                profileObj: info.profileObj
            };
            console.log(selected);
            const { data } = await login({
                variables: {
                    info: selected
                }
            });
            console.log(data);
            if (!data?.login) return;
            const {
                login: {
                    authData: { jwt, userId }
                }
            } = data;
            console.log(jwt);
        } catch (error) {
            // console.log(error);
        }
    };

    return (
        <ViewVerticalContainer>
            <Container maxWidth="lg" className={classes.container}>
                <GoogleLogin
                    clientId="236823754682-4eh7ie83hdo6q07o1gd6p5u3e737prnh.apps.googleusercontent.com"
                    buttonText="Login With Google"
                    onSuccess={response}
                    onFailure={response}
                    cookiePolicy={'single_host_origin'}
                />
                <Typography component="h1" variant="h3" color="textSecondary">
                    Groups
                </Typography>
            </Container>
        </ViewVerticalContainer>
    );
};
