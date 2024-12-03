'use client';

import React, { useState } from 'react';
import PinCode from './components/PinCode';
import Image from 'next/image';

const DiaryPage = () => {
    return (
        <>
            <div className='bg-black/40'>
                <div className='absolute pt-10 top-0 left-4 -z-10'>
                    <Image
                        src='/images/pattern/main/main-bg1.png'
                        alt='bg1'
                        width={390}
                        height={180}
                        className='opacity-50'
                    />
                </div>
                <PinCode />
            </div>
        </>
    );
};

export default DiaryPage;
