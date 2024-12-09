import React, { useState } from 'react';

const Square = ({ children }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleMouseEnter = () => {
        setIsAnimating(true);
    };

    const handleAnimationEnd = () => {
        setIsAnimating(false);
    };

    return (
        <div
            className={`square ${isAnimating ? 'rubberBand' : ''}`}
            onMouseEnter={handleMouseEnter}
            onAnimationEnd={handleAnimationEnd}
        >
            {children}
        </div>
    );
};

export default Square;
