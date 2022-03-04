import {
    IconButton, InputBase, Paper,
} from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { style } from './style';

export function SearchBar({
    placeholder, initialValue, action, SearchBarContainerStyle, searchBarStyle,
}) {

    const [terms, setTerms] = useState('');

    const navigate = useNavigate();

    const classes = style();

    const handleTerms = (e) => setTerms(e.target.value);

    const handleSubmit = () => {
        if (action) action();
        navigate(`/search/?t=${terms}`);
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
            className={SearchBarContainerStyle}
        >
            <Paper className={`${classes.bar} ${searchBarStyle}`}>
                <InputBase
                    placeholder={placeholder}
                    className={classes.input}
                    onChange={handleTerms}
                    defaultValue={initialValue}
                />
                <IconButton
                    type="submit"
                    className={classes.button}
                    aria-label="Search"
                    onClick={() => handleSubmit()}
                >
                    <SearchOutlined />
                </IconButton>
            </Paper>
        </form>
    );
}
