'use client';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import { useSelectedLayoutSegments } from 'next/navigation';
import React from 'react';

const MukkitlistLayout = ({ children }) => {
    const emotions = ['angry', 'anxiety', 'sad', 'tired'];

    const segments = useSelectedLayoutSegments();

    const lastSegment = segments[segments.length - 1];

    const getLayoutConfig = () => {
        if (emotions.some((emotion) => lastSegment?.indexOf(emotion))) {
            return {
                headerType: 'type2',
                showHeader: true,
                mainClassName: '',
            };
        }

        switch (lastSegment) {
            case 'angry' || 'anxiety' || 'sad' || 'tired':
                return {
                    headerType: 'type3',
                    showHeader: true,
                    mainClassName: '',
                };
            default:
                return {
                    headerType: 'type1',
                    showHeader: true,
                    mainClassName: '',
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

export default MukkitlistLayout;
