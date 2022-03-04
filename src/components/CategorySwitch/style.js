import { makeStyles } from '@material-ui/core';
import { theme } from '../../global/styles/style';

export const style = makeStyles({
    label: {
        '& *': {
            fontFamily: theme.font.body400,
            fontSize: '1rem',
        },
    },
});
