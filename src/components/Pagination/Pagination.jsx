import React from 'react';
import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { style } from './style';

export function Pagination({ page, setPage, ...props }) {

    const classes = style();

    return (
        <nav className={`${classes.container} ${props.className}`}>
            <Button
                onClick={(e) => {
                    e.preventDefault();
                    setPage(page - 1);
                }}
                startIcon={<ArrowBackIosIcon />}
                className={classes.button}
            >
                Previous
            </Button>
            <Button
                onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                }}
                endIcon={<ArrowForwardIosIcon />}
                className={classes.button}
            >
                Next
            </Button>
        </nav>
    );
}
