import React, { useState } from 'react';
import { SymbolSearch } from '../SymbolSearch';
import { Typography, makeStyles, createStyles, Theme, Grid, Paper, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { BuySell } from './BuySell';
import { Period } from './Period';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 80,
            marginLeft: 100,
            marginRight: 100
        },
        wrapper: {
            flex: 1
        }
    })
);

export const NewIdea = () => {
    const classes = useStyles();
    const [symbol, setSymbol] = useState<symbol | null>(null);
    const [buy, setBuy] = useState(true);
    const [period, setPeriod] = useState<Period>('intraday');

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Paper style={{ padding: 40 }}>
                    <Typography variant="h2">New Idea</Typography>
                    <div style={{ flexGrow: 1, marginTop: 60 }}>
                        <Grid container spacing={0}>
                            <Grid item xs={4}>
                                <SymbolSearch symbol={symbol} setSymbol={setSymbol} />
                            </Grid>
                            <Grid item xs={3} style={{}}>
                                <BuySell buy={buy} setBuy={setBuy} />
                            </Grid>
                            <Grid item xs={3}>
                                <Period period={period} setPeriod={setPeriod} />
                            </Grid>
                            <Grid item xs={2}>
                                <Fab color="secondary" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </div>
        </div>
    );
};
