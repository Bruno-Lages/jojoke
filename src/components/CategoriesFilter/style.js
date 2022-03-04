import { makeStyles } from '@material-ui/core';
import { theme } from '../../global/styles/style';

export const style = makeStyles({
    container: {
        width: 'max-content',
        height: 'max-content',
        margin: '1rem',
    },

    label: {
        fontFamily: theme.font.body400,
    },

    checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'flex-end',
    },

    checkboxLabel: {
        fontFamily: theme.font.body400,
        fontSize: '0.7rem',
    },
});
