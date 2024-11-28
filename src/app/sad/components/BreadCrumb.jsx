import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';

const BreadCrumb = () => {
    return (
        <>
            <Breadcrumb separator='>'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>먹킷 List</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>우울</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>About</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </>
    );
};

export default BreadCrumb;
