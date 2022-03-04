import { makeStyles } from '@material-ui/core';
import { theme } from '../../global/styles/style';

export const style = makeStyles({

    button: {
        '@media (min-width: 800px)': {
            display: 'none',
        },
    },

    link: {
        textDecoration: 'none',
    },

    navigator: {
        width: 'max-content',
        display: 'flex',
        flexDirection: 'vertical',
        justifyContent: 'center',
    },

    menu: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        // padding: '10vw',
        listStyleType: 'none',

        '& li': {
            height: 'max-content',
            padding: '1rem 0px',
            fontFamily: theme.font.title400,
            fontWeight: '700',
            fontSize: '1.4rem',
            cursor: 'pointer',
            display: 'flex',
            // justifyContent: 'flex-end',
            '& a': {
                paddingLeft: '1.5rem',
                textDecoration: 'none',
                color: theme.color.primaryColor,
            },
        },
        '& li:hover': {
            borderBottom: 'solid red 3px',
        },
    },

    searchBar: {
        margin: '8% 5%',
        borderRadius: '5px',
    },

    searchBarContainer: {
        background: theme.color.primaryColor,
    },

    menuItem: {
        margin: 0,
    },
});
