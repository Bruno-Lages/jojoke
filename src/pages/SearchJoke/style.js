import { makeStyles } from '@material-ui/core';
import { theme } from '../../global/styles/style';

export const style = makeStyles({
    container: {
        minHeight: '80vh',
        display: 'grid',
        alignItems: 'flex-start',
        gridTemplateAreas: `'searchBar searchBar'
                            'blankSpace terms'
                            'blankSpace chips'
                            'filter list'
                            'pagination pagination'`,
        '@media (max-width: 800px)': {
            gridTemplateAreas: `'searchBar'
                        'filter'
                        'terms'
                        'chips'
                        'list'
                        'pagination'`,
        },
    },

    searchBar: {
        gridArea: 'searchBar',
    },

    filter: {
        gridArea: 'filter',
        padding: '1rem',
        '@media (max-width: 800px)': {
            marginLeft: '5%',
        },
    },

    terms: {
        gridArea: 'terms',
        fontFamily: theme.font.body400,
        fontSize: '1rem',
        padding: '0 1rem',
    },

    chips: {
        gridArea: 'chips',
        display: 'flex',
        gap: '0.5rem',
        padding: '0 1rem',
        '& *': {
            fontFamily: theme.font.body400,
            fontWeight: '600',
        },
    },

    list: {
        gridArea: 'list',
    },

    pagination: {
        gridArea: 'pagination',
    },
});
