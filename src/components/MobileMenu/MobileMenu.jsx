import React from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import {
    Divider, Drawer, IconButton, List, ListItem,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { style } from './style';
import { SearchBar } from '../SearchBar/SearchBar';

export default function MobileMenu({ menu, setMenu, ...props }) {

    const classes = style();

    return (
        <>
            <IconButton
                aria-label="open menu"
                onClick={() => setMenu(!menu)}
                className={`${classes.button} ${props.className}`}
            >
                <MenuRoundedIcon />
            </IconButton>

            <div>
                <Drawer open={menu} onClose={() => setMenu(false)} anchor="left">
                    <SearchBar action={() => setMenu(false)} searchBarStyle={classes.searchBar} SearchBarContainerStyle={classes.searchBarContainer} placeholder="Search" />
                    <Divider />
                    <nav>
                        <List
                            className={classes.menu}
                        >
                            <ListItem divider>
                                <NavLink onClick={() => setMenu(!menu)} to="/categories/Misc">Misc</NavLink>
                            </ListItem>

                            <ListItem divider>
                                <NavLink onClick={() => setMenu(!menu)} to="/categories/Pun">Pun</NavLink>
                            </ListItem>

                            <ListItem divider>
                                <NavLink onClick={() => setMenu(!menu)} to="/categories/Programming">Programming</NavLink>
                            </ListItem>

                            <ListItem divider>
                                <NavLink onClick={() => setMenu(!menu)} to="/categories/Dark">Dark</NavLink>
                            </ListItem>
                        </List>
                    </nav>
                </Drawer>
            </div>
        </>
    );
}
