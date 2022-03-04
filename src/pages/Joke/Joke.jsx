import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import { RWebShare } from 'react-web-share';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '../../components/Card/Card';
import axios from '../../config/axios';
import { CopyButton } from '../../components/CopyButton/CopyButton';
import { style } from './style';

export function Joke() {

    const classes = style();

    const navigation = useNavigate();

    const { jokeId } = useParams();

    const [joke, setJoke] = useState({});

    async function getJoke() {
        const jokeData = await axios.get(`/Any?idRange=${jokeId}`, {});
        setJoke(jokeData.data);
    }

    useEffect(() => {
        getJoke();
    }, []);

    return (
        <main
            className={classes.container}
        >
            <Button
                startIcon={<ArrowBackIosIcon />}
                className={classes.returnButton}
                onClick={() => navigation(-1)}
            >
                Go back
            </Button>

            {Object.values(joke).length && !joke.error
                ? (
                    (joke.delivery
                        && (
                            <>
                                <Card className={classes.question}>
                                    <Typography
                                        className={classes.font}
                                    >
                                        {joke.setup}
                                    </Typography>
                                </Card>

                                <Card hiddable className={classes.joke}>
                                    <Typography
                                        className={classes.font}
                                    >
                                        {joke.delivery}
                                    </Typography>
                                </Card>
                            </>
                        )
                    )

                    || (
                        <Card className={classes.joke}>
                            <Typography
                                className={classes.font}
                            >
                                {joke.joke}
                            </Typography>
                        </Card>
                    ))
                : ''}

            {Object.values(joke).length && !joke.error
                ? (
                    <CopyButton text={joke.setup ? `${joke.setup} \n${joke.delivery}` : joke.joke} className={classes.copy}>
                        Copy
                    </CopyButton>
                )
                : ''}

            {Object.values(joke).length && !joke.error
                ? (
                    <RWebShare
                        data={{
                            text: 'Bad joke for you',
                            url: `https://jojoke-5734b.web.app/jokes/${joke.id}`,
                            title: 'Joke',
                        }}
                    >
                        <Button className={classes.share} variant="contained">Share</Button>
                    </RWebShare>

                )
                : ''}
            {Object.values(joke).length && joke.error ? (<p>{joke.causedBy}</p>) : ''}
            {!Object.values(joke).length ? (<div className={classes.joke}><CircularProgress /></div>) : ''}
        </main>
    );
}
