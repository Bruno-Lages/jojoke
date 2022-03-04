import React, { createContext, useEffect, useState } from 'react';

export const categoriesContext = createContext({});

export function ContextContainer({ children }) {

    const [page, setPage] = useState(1);

    const [dark, setDark] = useState(false);

    const [pun, setPun] = useState(false);

    const [programming, setProgramming] = useState(false);

    const [misc, setMisc] = useState(false);

    const [sfw, setSfw] = useState(true);

    const [all, setAll] = useState(true);

    function handleAll() {
        if ((misc && pun && programming && dark) || (!misc && !pun && !programming && !dark)) setAll(true);
        else setAll(false);
    }

    function selectAll() {
        if (all) {
            setMisc(false);
            setPun(false);
            setProgramming(false);
            setDark(false);
        }
    }

    useEffect(() => handleAll(), [misc, pun, programming, dark, all]);
    useEffect(() => selectAll(), [all]);

    return (
        <categoriesContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
                dark,
                setDark,
                pun,
                setPun,
                programming,
                setProgramming,
                misc,
                setMisc,
                sfw,
                setSfw,
                all,
                setAll,
                page,
                setPage,
            }}
        >
            {children}
        </categoriesContext.Provider>
    );

}
