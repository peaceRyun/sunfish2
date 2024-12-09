import Image from 'next/image';
import React from 'react';

const EntertainPage = () => {
    return (
        <>
            <Image
                src='/images/pattern/fixing.jpg'
                alt='fixing'
                width={1000}
                height={1000}
                className='w-full m-auto'
            ></Image>
        </>
    );
};

export default EntertainPage;
