'use client';

import React from 'react';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import { useSelectedLayoutSegments } from 'next/navigation';

const DiaryLayout = ({ children }) => {
    const segments = useSelectedLayoutSegments();

    const lastSegment = segments[segments.length - 1];

    const getLayoutConfig = () => {
        switch (lastSegment) {
            case 'newdiary':
                return {
                    headerType: 'type3',
                    showHeader: true,
                };
            case 'diaryunlocked':
                return {
                    headerType: 'type1',
                    showHeader: true,
                };
            case 'success':
                return {
                    headerType: 'type1',
                    showHeader: false,
                };
            default:
                return {
                    headerType: 'type2',
                    showHeader: true,
                };
        }
    };

    const config = getLayoutConfig();

    return (
        <>
            {config.showHeader && <Header type={config.headerType} />}
            <Main>{children}</Main>
        </>
    );
};

export default DiaryLayout;
