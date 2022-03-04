import { makeStyles } from '@material-ui/core';
import { theme } from '../../global/styles/style';

export const style = makeStyles({
    card: {
        height: 'max-content',
        width: '80%',
        margin: '0 auto',
        padding: '0.6rem 1rem',
        borderRadius: '1rem',
        backgroundColor: (props) => (props.hidden ? theme.color.blockedColor : '#fff'),
    },

    cardContent: {
        width: '100%',
        height: 'max-content',
        margin: 0,
        padding: '1rem',
        display: 'flex',
        visibility: (props) => (props.hidden ? 'hidden' : 'visible'),
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflowWrap: 'break-word',
        gap: '0.5rem',
        '&:last-child': {
            paddingBottom: '0.5rem',
        },
    },

    button: {
        marginLeft: 'auto',
        fontFamily: theme.font.body400,
        fontWeight: '600',
    },
});
