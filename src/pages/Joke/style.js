import { makeStyles } from '@material-ui/core';
import { theme } from '../../global/styles/style';

export const style = makeStyles({

    container: {
        display: 'grid',
        minHeight: '80vh',
        gridTemplateAreas: `'backButton blankSpace'
                            'question question'
                            'joke joke'
                            'copy share'`,
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
    },

    joke: {
        gridArea: 'joke',
        margin: '0 auto',
    },

    question: {
        gridArea: 'question',
    },

    copy: {
        gridArea: 'copy',
        maxWidth: '10rem',
        padding: '0.5rem 2rem',
        margin: '1rem auto',
        borderRadius: '10px',
        backgroundColor: theme.color.primaryColor,
        color: '#fff',
    },

    share: {
        gridArea: 'share',
        maxWidth: '10rem',
        padding: '0.5rem 2rem',
        margin: '1rem auto',
        borderRadius: '10px',
        backgroundColor: theme.color.primaryColor,
        color: '#fff',
    },

    font: {
        fontFamily: theme.font.body400,
        fontSize: '2rem',
    },

    returnButton: {
        gridArea: 'backButton',
        padding: '1rem',
        width: 'fit-content',
        fontFamily: theme.font.body400,
    },
});
