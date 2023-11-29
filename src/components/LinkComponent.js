// src/components/LinkComponent.js
import React from 'react';

function LinkComponent({ text, url }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">{text}</a>
    );
}

export default LinkComponent;

