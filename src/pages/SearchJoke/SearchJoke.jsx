import React, { useContext, useEffect, useState } from 'react';
import { ListItem } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSearchParams } from 'react-router-dom';
import { CategoriesFilter } from '../../components/CategoriesFilter/CategoriesFilter';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { DeletableChip } from '../../components/DeletableChip/DeletableChip';
import { Pagination } from '../../components/Pagination/Pagination';
import axios from '../../config/axios';
import List from '../../components/List/List';
import JokeCard from '../../components/JokeCard/JokeCard';
import { style } from './style';
import { categoriesContext } from '../../context/CategoriesContext';

export default function SearchJoke() {

    const classes = style();

    const {
        page, setPage, misc, setMisc, pun, setPun, programming, setProgramming, dark, setDark, sfw, setSfw,
    } = useContext(categoriesContext);

    const [searchParams] = useSearchParams();

    let term = searchParams.get('t');
    term = encodeURIComponent(term);

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

    const [jokeList, setJokeList] = useState([]);

    async function getJokeList() {
        const jokeListData = await axios.get(`/${categories}?contains=${term}&amount=10${sfw ? '&safe-mode' : ''}`, {});
        setJokeList(jokeListData.data.jokes);
    }

    useEffect(() => {
        updateCategories();
        getJokeList();
    }, [pun, dark, programming, misc, sfw, term, page]);

    return (
        <main className={classes.container}>

            <SearchBar initialValue={searchParams.get('t')} SearchBarContainerStyle={classes.searchBar} />

            <CategoriesFilter className={classes.filter} />

            <p className={classes.terms}>{`Results for "${term}"`}</p>

            <div className={classes.chips}>
                { misc && (<DeletableChip nameCategory="Misc" category={misc} setCategory={setMisc} />)}
                { pun && (<DeletableChip nameCategory="Pun" category={pun} setCategory={setPun} />)}
                { programming && (<DeletableChip nameCategory="Programming" category={programming} setCategory={setProgramming} />)}
                { dark && (<DeletableChip nameCategory="Dark" category={dark} setCategory={setDark} />)}
                { sfw && (<DeletableChip nameCategory="SFW" category={sfw} setCategory={setSfw} />)}
            </div>

            <List className={classes.list}>
                {
                    jokeList
                    && jokeList.sort((a, b) => a.id - b.id)
                        .map(
                            (joke) => (
                                <ListItem key={joke.id}>
                                    <JokeCard joke={joke} />
                                </ListItem>
                            ),
                        )
                }

                {jokeList && !Object.values(jokeList).length ? (
                    <CircularProgress />
                ) : ''}
            </List>

            {!jokeList && (<div className={classes.list}><p className={classes.terms}>Joke on you! Nothing has been found</p></div>)}

            <Pagination page={page} setPage={setPage} className={classes.pagination} />
        </main>
    );
}
