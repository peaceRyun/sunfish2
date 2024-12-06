import React from 'react';

const ArrowMatrix = () => {
    return (
        <div className='absolute top-20 -left-2 w-96 h-96 '>
            <div className='absolute inset-0 opacity-20'>
                {/* SVG for arrows */}
                <svg className='w-full h-full' viewBox='0 0 400 300' fill='none' stroke='currentColor'>
                    {/* X축 (시급성) */}
                    <line x1='40' y1='260' x2='360' y2='260' className='stroke-gray-600 stroke-2' />
                    <path d='M360,260 L350,255 L350,265 Z' className='fill-gray-600 stroke-none' />

                    {/* Y축 (중요도) */}
                    <line x1='40' y1='260' x2='40' y2='40' className='stroke-gray-600 stroke-2' />
                    <path d='M40,40 L35,50 L45,50 Z' className='fill-gray-600 stroke-none' />
                </svg>

                {/* 축 레이블 */}
                <div className='absolute left-4 top-1/2 transform -translate-y-1/2 px-2 text-gray-600 text-sm bg-white'>
                    중요도
                </div>
                <div className='absolute bottom-20 right-1/2 transform translate-x-1/2 text-gray-600 text-sm bg-white'>
                    시급성
                </div>
            </div>
        </div>
    );
};

export default ArrowMatrix;
