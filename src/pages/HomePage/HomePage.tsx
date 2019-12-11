import React, { FC, useContext } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ViewVerticalContainer } from '@nareshbhatia/react-force';
import GoogleLogin from 'react-google-login';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { GoogleWebLogin } from '../../graphql-types';
import { login } from './__generated__/login';
import { RootStore } from '../../stores';
import { RootContext } from '../../contexts';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        textAlign: 'center',
        paddingTop: theme.spacing(8)
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

export interface HomeProps {
    rootStore?: RootStore;
}

export const HomePage: FC<HomeProps> = () => {
    const { routerStore } = useContext(RootContext);

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
            routerStore.goTo('app');
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
            </Container>
        </ViewVerticalContainer>
    );
};
