'use client';

import React from 'react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import { useSelectedLayoutSegments } from 'next/navigation';

const EncyclopediaLayout = ({ children }) => {
    const segments = useSelectedLayoutSegments();
    const isPimplePage = segments.includes('pimple');

    // pimple 페이지일 경우 Header를 렌더링하지 않음
    if (isPimplePage) {
        return <>{children}</>;
    }

    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default EncyclopediaLayout;
