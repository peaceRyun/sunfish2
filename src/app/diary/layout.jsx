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
                    mainClassName: '',
                };
            case 'diaryunlocked':
                return {
                    headerType: 'type1',
                    showHeader: true,
                    mainClassName: 'bg-custom-blue-200',
                };
            case 'success':
                return {
                    headerType: 'type1',
                    showHeader: false,
                    mainClassName: '',
                };
            default:
                return {
                    headerType: 'type2',
                    showHeader: true,
                    mainClassName: '',
                };
        }
    };

    const config = getLayoutConfig();

    return (
        <>
            {config.showHeader && <Header type={config.headerType} />}
            <Main className={config.mainClassName}>{children}</Main>
        </>
    );
};

export default DiaryLayout;
