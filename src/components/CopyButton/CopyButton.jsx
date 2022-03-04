import { Button } from '@material-ui/core';
import React from 'react';

function handleCopy(text) {
    navigator.clipboard.writeText(text);
}

export function CopyButton({ text, children, ...props }) {
    return (
        <Button
            onClick={() => handleCopy(text)}
            className={props.className}
            variant="contained"
        >
            {children}
        </Button>
    );
}
