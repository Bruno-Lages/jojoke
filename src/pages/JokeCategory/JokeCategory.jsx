import { ListItem } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JokeCard from '../../components/JokeCard/JokeCard';
import List from '../../components/List/List';
import { Pagination } from '../../components/Pagination/Pagination';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import axios from '../../config/axios';
import { categoriesContext } from '../../context/CategoriesContext';
import { style } from './style';

export default function JokeCategory() {

    const classes = style();

    const { page, setPage } = useContext(categoriesContext);

    const { category } = useParams();

    const categoryInterval = 50;

    const [jokeList, setJokeList] = useState([]);

    async function getJokeListData() {
        try {
            const jokeListData = await axios.get(`/${category}?idRange=${page * categoryInterval - categoryInterval}-${page * categoryInterval}&amount=10`);
            if (jokeListData.data.error) throw new Error();
            setJokeList(jokeListData.data.jokes);
        } catch (e) {
            if (page < 3) setPage(page + 1);
        }
    }

    useEffect(() => {
        getJokeListData();
    }, [page, category]);

    return (
        <main className={classes.container}>
            <SearchBar
                placeholder={`Search for a ${category.toLowerCase()} joke`}
                categories={[category]}
                SearchBarContainerStyle={classes.searchBar}
            />
            <List>
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
            </List>
            {!Object.values(jokeList).length ? (
                <div className={classes.LoadingIcon}><CircularProgress /></div>
            ) : ''}
            <Pagination page={page} setPage={setPage} />
        </main>
    );
}
