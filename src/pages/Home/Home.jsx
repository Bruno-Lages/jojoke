import React, { useContext, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import axios from '../../config/axios';

import svg from '../../assets/funny-character.svg';
import svg2 from '../../assets/unboxing.svg';

import { style } from './style';
import { CategoriesFilter } from '../../components/CategoriesFilter/CategoriesFilter';
import { categoriesContext } from '../../context/CategoriesContext';

export default function Home() {

    const classes = style();

    const {
        misc, pun, programming, dark, sfw,
    } = useContext(categoriesContext);

    const navigation = useNavigate();

    let categories = 'Any';

    // update the categories array, checking which category is selected and adding it
    // if none is selected, adds all the categories
    function updateCategories() {
        let categoriesSet = [];
        if (pun) categoriesSet.push('Pun');
        if (dark) categoriesSet.push('Dark');
        if (misc) categoriesSet.push('Misc');
        if (programming) categoriesSet.push('Programming');
        categoriesSet = categoriesSet.join(',');
        if (!categoriesSet.length) categoriesSet = ['Any'];
        categories = categoriesSet;
    }

    async function getJoke() {
        const jokeData = await axios.get(`/${categories}${sfw ? '?safe-mode' : ''}`, {});
        navigation(`/jokes/${jokeData.data.id}`);
    }

    // when a category is selected/deselected, updates the categories array
    useEffect(() => {
        updateCategories();
    }, [misc, pun, programming, dark, sfw]);

    return (
        <main>
            <section className={classes.landscape}>
                <div className={classes.text}>
                    <h1 className={classes.tittle}>Wanna hear a joke?</h1>
                    <h2 className={classes.subtittle}>Take a shot of humor.</h2>
                    <h2 className={classes.subtittle}>Find hilarious content!</h2>
                </div>
                <div className={classes.imgContainer}>
                    <img src={svg} alt="log" className={classes.svg} />
                </div>
            </section>

            <section className={classes.container}>
                <div className={classes.imgContainer2}>
                    <img src={svg2} alt="log" className={classes.svg} />
                </div>

                <CategoriesFilter className={classes.filter}>
                    <Button
                        onClick={() => {
                            getJoke();
                        }}
                        variant="contained"
                        className={classes.button}
                    >
                        Get joke
                    </Button>
                </CategoriesFilter>
            </section>
        </main>
    );
}
