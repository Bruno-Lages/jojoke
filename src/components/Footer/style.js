import { makeStyles } from '@material-ui/core';
import { theme } from '../../global/styles/style';

export const style = makeStyles({
    container: {
        margin: '2rem auto ',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& p': {
            fontFamily: theme.font.body400,
            fontSize: '0.7rem',
            color: 'black',
            margin: '0.2rem',
            '& a': {
                color: theme.color.primaryColor,
                fontWeight: '600',
                textDecoration: 'none',
            },
        },
    },
});
