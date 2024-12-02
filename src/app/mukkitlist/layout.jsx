'use client';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import { useSelectedLayoutSegments } from 'next/navigation';
import React from 'react';

const MukkitlistLayout = ({ children }) => {
    const segments = useSelectedLayoutSegments();
    const isSadPage = segments.includes('sad');

    // pimple 페이지일 경우 Header를 렌더링하지 않음
    if (isSadPage) {
        return <>{children}</>;
    }
    return (
        <>
            <Header type='type1' title='about' sharing={true} prev={true} />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default MukkitlistLayout;
