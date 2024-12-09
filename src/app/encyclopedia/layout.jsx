'use client';

import React from 'react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import { useSelectedLayoutSegments } from 'next/navigation';

const EncyclopediaLayout = ({ children }) => {
    const segments = useSelectedLayoutSegments();
    const lastSegment = segments[segments.length - 1];

    const getLayoutConfig = () => {
        const symptoms = ['pimple', 'musclepain', 'maldigestion'];

        if (symptoms.includes(lastSegment)) {
            return {
                headerType: 'type3',
                showHeader: true,
            };
        }

        return {
            headerType: 'type1',
            showHeader: true,
        };
    };

    const config = getLayoutConfig();

    return (
        <>
            {config.showHeader && <Header type={config.headerType} />}
            <Main>{children}</Main>
        </>
    );
};

export default EncyclopediaLayout;
