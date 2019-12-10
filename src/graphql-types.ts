/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface GoogleProfile {
    email: string;
    familyName: string;
    givenName: string;
    name: string;
    googleId: string;
    imageUrl?: string | null;
}

export interface GoogleWebLogin {
    accessToken: string;
    googleId: string;
    tokenId: string;
    profileObj: GoogleProfile;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
