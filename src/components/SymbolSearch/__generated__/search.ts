/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: search
// ====================================================

export interface search_search {
    __typename: 'Symbol';
    symbol: string;
    exchange: string;
    name: string;
    date: string;
    type: string;
    iexId: string;
    region: string;
    currency: string;
}

export interface search {
    search: search_search[];
}

export interface searchVariables {
    fragment: string;
}
