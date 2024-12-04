import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import React from 'react';

const tdlRegisterLayout = ({ children }) => {
    return (
        <>
            <Header type='type2' />
            <Main>{children}</Main>
        </>
    );
};

export default tdlRegisterLayout;
