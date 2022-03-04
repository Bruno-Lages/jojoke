import { makeStyles } from '@material-ui/core';
import { theme } from '../../global/styles/style';

export const style = makeStyles({
    card: {
        height: 'max-content',
        width: '100%',
        margin: 0,
        '&:hover': {
            backgroundColor: theme.color.subtleColor,
            transform: 'scale(1.05)',
            transition: 'transform 0.3s',
        },
    },

    cardContent: {
        width: '100%',
        height: '8rem',
        margin: 0,
        padding: '0.7rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: '0.5rem',
        '&:last-child': {
            paddingBottom: '0.5rem',
        },
        '&:hover p': {
            color: theme.color.primaryColor,
        },
        '& a': {
            textDecoration: 'none',
            color: '#001',
        },
    },

    link: {
        marginLeft: 'auto',
    },

    chipLink: {
        textDecoration: 'none',
    },

    chip: {
        padding: '0 0.5rem',
        cursor: 'pointer',
        backgroundColor: theme.color.primaryColor,
        color: '#fff',
        fontFamily: theme.font.body400,
    },

    jokeTittle: {
        pading: '0.5rem 0',
        margin: '0.2rem 0 0.5rem 0',
        fontSize: '1.3rem',
        fontFamily: theme.font.body400,
    },
});
