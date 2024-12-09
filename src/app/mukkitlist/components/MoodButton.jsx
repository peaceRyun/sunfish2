import React from 'react';

const MoodButton = ({ title, subtitle, bgColor }) => {
    const colorClasses = {
        blue: 'bg-blue-300 hover:bg-blue-400',
        red: 'bg-red-300 hover:bg-red-400',
        orange: 'bg-orange-300 hover:bg-orange-400',
        purple: 'bg-purple-300 hover:bg-purple-400',
    };

    return (
        <button
            className={`
        ${colorClasses[bgColor]}
        w-40 h-40
        rounded-xl
        shadow-lg
        transform transition-all duration-200
        hover:scale-105 hover:shadow-xl
        active:scale-95
        flex flex-col
        justify-center items-center
        p-4
        text-gray-700
      `}
        >
            <div className='font-medium text-lg mb-2 font-custom2'>{title}</div>
            <div className='text-sm'>{subtitle}</div>
        </button>
    );
};

export default MoodButton;
