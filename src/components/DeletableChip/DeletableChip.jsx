import { Chip as MaterialuiChip } from '@material-ui/core';
import React from 'react';
import { style } from './style';

export function DeletableChip({ nameCategory, category, setCategory }) {
    const classes = style();

    return (
        <MaterialuiChip
            onDelete={() => setCategory(!category)}
            label={nameCategory}
            color="primary"
            classes={{ colorPrimary: classes.iconColorPrimary }}
        />
    );
}
