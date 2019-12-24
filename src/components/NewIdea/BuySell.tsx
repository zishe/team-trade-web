import React from 'react';
import { Typography } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

interface BuySellProps {
    buy: boolean;
    setBuy: (value: boolean) => void;
}

export const BuySell = ({ buy, setBuy }: BuySellProps) => {
    return (
        <ToggleButtonGroup>
            <ToggleButton
                selected={!buy}
                key={1}
                value="sell"
                style={{
                    backgroundColor: buy ? '#fff' : '#b00020',
                    width: 100,
                    color: !buy ? '#fff' : 'rgba(0, 0, 0, 0.38)'
                }}
                onClick={e => {
                    setBuy(false);
                }}
            >
                <Typography variant="button">SELL</Typography>
            </ToggleButton>
            <ToggleButton
                selected={buy}
                key={2}
                value="buy"
                style={{
                    backgroundColor: buy ? '#018786' : '#fff',
                    width: 100,
                    color: buy ? '#fff' : 'rgba(0, 0, 0, 0.38)'
                }}
                onClick={e => {
                    setBuy(true);
                }}
            >
                <Typography variant="button">BUY</Typography>
            </ToggleButton>
        </ToggleButtonGroup>
    );
};
