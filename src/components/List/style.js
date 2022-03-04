import { makeStyles } from '@material-ui/core';

export const style = makeStyles({
    list: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(25rem, 1fr))',
        '@media (max-width: 800px)': {
            gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
        },
    },
});
