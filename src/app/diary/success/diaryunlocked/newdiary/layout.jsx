import React from 'react';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';

const NewDiaryLayout = ({ children }) => {
    return (
        <>
            <Header type='type3' />
            <Main>{children}</Main>
        </>
    );
};

export default NewDiaryLayout;
