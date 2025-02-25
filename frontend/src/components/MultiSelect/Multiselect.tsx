import React, { useState, useEffect } from 'react';
import './MultiSelector.scss';

const MultiSelector = ({ items, selectedItems, setSelectedItems }) => {

    const handleItemClick = (item) => {
        setSelectedItems(prevState => {
            const newState = { ...prevState, [item]: !prevState[item] };
            return newState;
        });
    };

    const getButtonClasses = (item, index) => {
        const classes = ['multi-selector-button'];
        if (selectedItems[item]) {
            classes.push('selected');
            
            const prevSelected = index > 0 && selectedItems[items[index - 1]];
            const nextSelected = index < items.length - 1 && selectedItems[items[index + 1]];
            
            if (prevSelected) classes.push('merge-left');
            if (nextSelected) classes.push('merge-right');
        }
        return classes.join(' ');
    };

    return (
        <div className="multi-selector">
            {items.map((item, index) => (
                <button
                    key={item}
                    className={getButtonClasses(item, index)}
                    onClick={() => handleItemClick(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export default MultiSelector;