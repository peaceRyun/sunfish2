import React from 'react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';

const DiaryUnlockedLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Main className='bg-custom-blue-200'>{children}</Main>
        </>
    );
};

export default DiaryUnlockedLayout;
