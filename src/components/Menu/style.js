import { makeStyles } from '@material-ui/core';
import { theme } from '../../global/styles/style';

export const style = makeStyles({
    header: {
        display: 'grid',
        gridTemplateAreas: '\'logo categories searchBar\'',
        justifyContent: 'space-between',
        padding: '1rem',
        '@media (max-width: 800px)': {
            gridTemplateAreas: '\'mobileMenu logo searchBar\'',
        },
    },

    title: {
        fontFamily: theme.font.title400,
        fontSize: '2.5rem',
        margin: 0,
        textDecoration: 'none',
    },

    link: {
        textDecoration: 'none',
        gridArea: 'logo',
        color: theme.color.primaryColor,
    },

    navigator: {
        width: 'max-content',
        display: 'flex',
        flexDirection: 'vertical',
        justifyContent: 'center',
    },

    menuContainer: {
        gridArea: 'categories',
        '@media (max-width: 800px)': {
            display: 'none',
        },
    },

    menu: {
        margin: 0,
        height: '100%',
        display: 'grid',
        justifyContent: 'space-between',
        alignItems: 'center',
        gridAutoFlow: 'column',
        gap: '1.5rem',
        listStyleType: 'none',

        '& li': {
            height: 'max-content',
            padding: '5px 0px',
            fontFamily: theme.font.title400,
            fontWeight: '700',
            fontSize: '1.4rem',
            cursor: 'pointer',
            '& a': {
                textDecoration: 'none',
                color: theme.color.primaryColor,
            },
        },
        '& li:hover': {
            borderBottom: 'solid red 3px',
        },
    },

    SearchIconContainer: {
        gridArea: 'searchBar',
    },

    mobileMenu: {
        gridArea: 'mobileMenu',
    },

    menuItem: {
        margin: 0,
    },
});
