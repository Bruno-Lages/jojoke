import React, { useState } from 'react';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { ClickAwayListener, IconButton } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
import { style } from './style';
import MobileMenu from '../MobileMenu/MobileMenu';

export function Menu() {

    const classes = style();

    const [toggleSearhBar, setToggleSearhBar] = useState(false);

    const [menu, setMenu] = useState(false);

    function handleMobileSearch() {
        if ((window.screen.width > 800)) setToggleSearhBar(!toggleSearhBar);
        else setMenu(true);
    }

    return (
        <header
            className={classes.header}
        >
            <Link to="/" className={classes.link}>
                <h1
                    className={classes.title}
                >
                    jojoke
                </h1>
            </Link>
            <nav
                className={classes.menuContainer}
            >
                <ul
                    className={classes.menu}
                >
                    <li><NavLink to="/categories/Misc">Misc</NavLink></li>
                    <li><NavLink to="/categories/Pun">Pun</NavLink></li>
                    <li><NavLink to="/categories/Programming">Programming</NavLink></li>
                    <li><NavLink to="/categories/Dark">Dark</NavLink></li>
                </ul>
            </nav>
            <ClickAwayListener onClickAway={() => setToggleSearhBar(false)}>
                <div
                    className={classes.SearchIconContainer}
                >
                    {
                        toggleSearhBar
                            ? (
                                (
                                    (window.screen.width > 800 && (<SearchBar placeholder="Search" categories={[]} />))
                                )
                                || setToggleSearhBar(false))
                            : (
                                <IconButton aria-label="Search" onClick={() => handleMobileSearch()}>
                                    <SearchOutlined />
                                </IconButton>
                            )
                    }
                </div>
            </ClickAwayListener>
            <MobileMenu className={classes.mobileMenu} menu={menu} setMenu={setMenu} />

        </header>
    );
}
