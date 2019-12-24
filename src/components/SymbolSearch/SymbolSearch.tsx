import React, { useState, ChangeEvent, useEffect } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { TextField, Grid, Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import { search_search } from './__generated__/search';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {}
    })
);

const SEARCH = gql`
    query search($fragment: String!) {
        search(fragment: $fragment) {
            symbol
            exchange
            name
            date
            type
            iexId
            region
            currency
        }
    }
`;

export type Symbol = search_search;

export const SymbolSearch = ({
    symbol,
    setSymbol
}: {
    symbol: symbol | null;
    setSymbol: (symbol: symbol) => void;
}) => {
    const classes = useStyles();

    const [options, setOptions] = useState<symbol[]>([]);
    const [fragment, setFragment] = useState('');

    const { loading, error, data } = useQuery<{ search: symbol[] }, { fragment: string }>(SEARCH, {
        variables: { fragment }
    });
    // console.log(data);

    useEffect(() => {
        if (error) setOptions([]);
        // if (loading) setOptions([]);
        if (data?.search && data.search.length > 0) setOptions(data.search);
    }, [fragment, loading, error]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFragment(event.target.value);
    };

    return (
        <div>
            <Autocomplete
                className={classes.wrapper}
                options={options}
                getOptionLabel={(option: any) => option.symbol}
                style={{ width: 300, borderColor: '#444' }}
                renderInput={params => (
                    <TextField
                        {...params}
                        label="Find a stock"
                        variant="outlined"
                        style={{ borderColor: '#444' }}
                        fullWidth
                        onChange={handleChange}
                        onFocus={() => {}}
                        // inputProps={{ autoCorrect: 'disabled' }}
                    />
                )}
                onChange={(e, value) => {
                    // console.log(value);
                    setSymbol(value as symbol);
                }}
                renderOption={option => {
                    // const symbol = option as SymbolDTO;

                    return (
                        <Grid container alignItems="center">
                            {/* <Grid item>
                                <LocationOnIcon className={classes.icon} />
                            </Grid> */}
                            <Grid item xs>
                                <span>{option.symbol}</span>
                                <Typography
                                    variant="body1"
                                    color="textSecondary"
                                    style={{ float: 'right' }}
                                >
                                    {option.exchange}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {option.name}
                                </Typography>
                            </Grid>
                        </Grid>
                    );
                }}
            />
        </div>
    );
};
