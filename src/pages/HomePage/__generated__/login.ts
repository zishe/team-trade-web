/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { GoogleWebLogin } from './../../../graphql-types';

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login_authData {
    __typename: 'AuthData';
    jwt: string;
    userId: string;
}

export interface login_login {
    __typename: 'Auth';
    success: boolean;
    authData: login_login_authData;
}

export interface login {
    login: login_login | null;
}

export interface loginVariables {
    info: GoogleWebLogin;
}
