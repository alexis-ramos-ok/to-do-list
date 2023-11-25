import React from 'react';
import './DateDisplay.css';

const DateDisplay = () => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return (
        <div className="date-display">
            {formattedDate}
        </div>
    );
};

export default DateDisplay;
