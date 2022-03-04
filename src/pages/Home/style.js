import { makeStyles } from '@material-ui/core';
import { theme } from '../../global/styles/style';

export const style = makeStyles({
    landscape: {
        display: 'grid',
        gridTemplateAreas: '\'text svg\'',
        padding: '3rem',
        gap: '2rem',
        minHeight: '80vh',
        '@media (max-width: 800px)': {
            gridTemplateAreas: '\'svg\' \'text\'',
            padding: '1.5rem',
        },
    },

    text: {
        gridArea: 'text',
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '@media (max-width: 800px)': {
            textAlign: 'center',
        },
    },

    tittle: {
        fontFamily: theme.font.title400,
        fontSize: '3rem',
        margin: 0,
        marginBottom: '0.5rem',
    },

    subtittle: {
        fontFamily: theme.font.body400,
        fontWeight: '400',
        fontSize: '1.5rem',
        margin: '0.2rem',
    },

    imgContainer: {
        gridArea: 'svg',
        borderRadius: '50%',
        backgroundColor: '#b2b356',
    },

    svg: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },

    container: {
        display: 'flex',
        minHeight: '80vh',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gridTemplateAreas: '\'svg filter\'',
        '@media (max-width: 800px)': {
            flexDirection: 'column',
            padding: '1.5rem',
        },
    },

    imgContainer2: {
        gridArea: 'svg',
        width: '50%',
        '@media (max-width: 800px)': {
            width: '100%',
        },
    },

    filter: {
        gridArea: 'filter',
        padding: '3rem',
        borderRadius: '2rem',
        '@media (max-width: 800px)': {
            padding: '2rem',
        },
    },

    button: {
        backgroundColor: theme.color.primaryColor,
        color: '#fff',
        padding: '1rem',
        margin: '1rem 0',
    },
});
