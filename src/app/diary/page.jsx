'use client';

import React, { useState } from 'react';
import PinCode from './components/PinCode';
import Image from 'next/image';

const DiaryPage = () => {
    return (
        <>
            <div className='bg-black/40'>
                <PinCode />
            </div>
        </>
    );
};

export default DiaryPage;
