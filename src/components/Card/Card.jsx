import React, { useState } from 'react';
import {
    Card as CardComponent, CardContent, CardActions, Button,
} from '@material-ui/core';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import { style } from './style';

export default function Card({ hiddable = false, ...props }) {

    const [hidden, setHidden] = useState(hiddable);

    const classes = style({ hidden });

    return (
        <CardComponent className={`${classes.card} ${props.className ? props.className : ''}`}>
            {
                hiddable
                && (
                    <CardActions>
                        <Button
                            size="small"
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    setHidden(!hidden);
                                }
                            }
                            endIcon={hidden ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                            className={classes.button}
                        >
                            {hidden ? 'See answer' : 'Hide answer'}
                        </Button>
                    </CardActions>
                )
            }
            {
                (
                    <CardContent className={classes.cardContent}>
                        {/* eslint-disable-next-line react/prop-types */}
                        {props.children}
                    </CardContent>
                )
            }
        </CardComponent>
    );
}
