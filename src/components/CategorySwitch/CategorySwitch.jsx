import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import { style } from './style';

export function CategorySwitch({ nameCategory, category, setCategory }) {

    const classes = style();

    return (
        <FormControlLabel
            control={<Switch checked={category} onChange={() => setCategory(!category)} name={nameCategory} />}
            label={nameCategory}
            labelPlacement="start"
            className={classes.label}
        />
    );
}
