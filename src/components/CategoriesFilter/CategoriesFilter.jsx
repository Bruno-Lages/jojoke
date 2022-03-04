import {
    Card,
    Checkbox,
    FormControl, FormGroup, FormLabel,
} from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { categoriesContext } from '../../context/CategoriesContext';
import { CategorySwitch } from '../CategorySwitch/CategorySwitch';
import { style } from './style';

export function CategoriesFilter({ children, ...props }) {

    const classes = style();

    const {
        misc, setMisc, pun, setPun, programming, setProgramming, dark, setDark, sfw, setSfw, all, setAll,
    } = useContext(categoriesContext);

    useEffect(() => { if (dark) setSfw(false); }, [dark]);

    useEffect(() => console.log(sfw), [sfw]);

    return (
        <Card className={`${props.className} ${classes.container}`}>
            <FormControl>
                <FormLabel className={classes.label}>Filters</FormLabel>

                <FormGroup>
                    <CategorySwitch nameCategory="Misc" category={misc} setCategory={setMisc} />
                    <CategorySwitch nameCategory="Pun" category={pun} setCategory={setPun} />
                    <CategorySwitch nameCategory="Programming" category={programming} setCategory={setProgramming} />
                    <CategorySwitch nameCategory="Dark" category={dark} setCategory={setDark} />
                    <CategorySwitch nameCategory="All" category={all} setCategory={setAll} />
                    {/* <CategorySwitch nameCategory="SFW" category={sfw} setCategory={setSfw} /> */}
                    <div className={classes.checkboxContainer}>
                        <Checkbox
                            checked={sfw && !dark}
                            onChange={() => {
                                if (dark && !sfw) setDark(false);
                                setSfw(!sfw);
                            }}
                        />
                        <p className={classes.checkboxLabel}>show only safe jokes</p>
                    </div>
                    {children}
                </FormGroup>

            </FormControl>
        </Card>
    );
}
