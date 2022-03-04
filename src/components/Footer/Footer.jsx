import React from 'react';
import { style } from './style';

export default function Footer() {

    const classes = style();

    return (
        <footer className={classes.container}>
            <p>
                Developed by
                {' '}
                <a href="https://github.com/Bruno-Lages" rel="noreferrer" target="_blank">Bruno.</a>
            </p>
            <p>
                Illustrations by
                {' '}
                <a href="https://iconscout.com/contributors/humaaans" rel="noreferrer" target="_blank">Pablo Stanley</a>
            </p>
        </footer>
    );
}
