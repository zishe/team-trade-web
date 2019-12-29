import React from 'react';
import { MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';

export type Period = 'intraday' | 'days' | 'weeks' | 'years';

interface PeriodProps {
    period: Period;
    setPeriod: (value: Period) => void;
}

export const Period = ({ period, setPeriod }: PeriodProps) => {
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setPeriod(event.target.value as Period);
    };
    return (
        <FormControl variant="outlined" style={{ display: 'block', marginTop: 40 }}>
            <InputLabel id="period-label">Period</InputLabel>
            <Select
                id="select"
                value={period}
                onChange={handleChange}
                labelId="period-label"
                labelWidth={48}
                style={{ width: 300 }}
            >
                <MenuItem value={'intraday'}>Intraday</MenuItem>
                <MenuItem value={'days'}>Days</MenuItem>
                <MenuItem value={'weeks'}>Weeks</MenuItem>
                <MenuItem value={'years'}>Years</MenuItem>
            </Select>
        </FormControl>
    );
};
