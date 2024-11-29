import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';

const BreadCrumb = () => {
    return (
        <>
            <Breadcrumb fontSize='2xl' separator='>'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/mukkitlist'>먹킷 List</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </>
    );
};

export default BreadCrumb;
