import React, { useState } from 'react';
import { SymbolSearch, StockSymbol } from '../SymbolSearch';
import {
    Typography,
    makeStyles,
    createStyles,
    Theme,
    Grid,
    Paper,
    Button,
    Icon
} from '@material-ui/core';
import { BuySell } from './BuySell';
import { Period } from './Period';
import { gql } from 'apollo-boost';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 80,
            marginLeft: 100,
            marginRight: 100
        },
        wrapper: {
            flex: 1
        },
        button: {
            marginTop: 60,
            width: 300,
            height: 50
        }
    })
);

export const NewIdea = () => {
    const classes = useStyles();
    const [symbol, setSymbol] = useState<StockSymbol | null>(null);
    const [buy, setBuy] = useState(true);
    const [period, setPeriod] = useState<Period>('intraday');

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Paper style={{ padding: 40 }}>
                    <div style={{ flexGrow: 1 }}>
                        <Grid container spacing={0}>
                            <Grid item xs={6} md={4} lg={3}>
                                <Typography variant="h2" style={{ marginBottom: 50 }}>
                                    New Idea
                                </Typography>
                                <SymbolSearch symbol={symbol} setSymbol={setSymbol} />
                                <BuySell buy={buy} setBuy={setBuy} />
                                <Period period={period} setPeriod={setPeriod} />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    className={classes.button}
                                    endIcon={<Icon>send</Icon>}
                                >
                                    POST
                                </Button>
                            </Grid>
                            <Grid item xs={5} md={8} lg={9} style={{}}>
                                {/* <StockChart /> */}
                                <Paper
                                    elevation={0}
                                    square
                                    style={{
                                        backgroundColor: '#E5E5E5',
                                        width: 'calc(100% - 50px)',
                                        marginLeft: 50,
                                        height: 500
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </div>
        </div>
    );
};

const CHART = gql`
    query chart($ticker: String!) {
        chart(ticker: $ticker) {
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

// function StockChart = () => {
//     data
//     return (
//         <TypeChooser>
//             {type => <Chart type={type} data={data} />}
//         </TypeChooser>
//     )
// }
