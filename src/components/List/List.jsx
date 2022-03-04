import React from 'react';
import { List as MaterialUiList } from '@material-ui/core';
import { style } from './style';

export default function List({ children, ...props }) {

    const classes = style();

    return (
        <MaterialUiList
            className={`${classes.list} ${props.className}`}
        >
            {children}
        </MaterialUiList>
    );
}
