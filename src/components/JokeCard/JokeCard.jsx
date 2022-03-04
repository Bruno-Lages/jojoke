import React from 'react';
import {
    Card as CardComponent, CardContent, Divider, Chip, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { style } from './style';

export default function JokeCard({ joke }) {

    const classes = style();

    return (
        <CardComponent className={classes.card}>
            <CardContent
                className={classes.cardContent}
            >
                <Link to={`/jokes/${joke.id}`}>
                    <Typography
                        noWrap
                        className={classes.jokeTittle}
                    >
                        {
                            joke.type === 'single'
                                ? joke.joke
                                : joke.setup
                        }
                    </Typography>
                    <Divider />
                </Link>
                {joke.category
                && (
                    <Link to={`/categories/${joke.category}`} className={classes.link}>
                        <Chip
                            size="small"
                            label={joke.category}
                            className={classes.chip}
                        />
                    </Link>
                )}
            </CardContent>
        </CardComponent>
    );
}
