import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';

const DropDown = () => {
    return (
        <>
            <Menu>
                <MenuButton>요리 설명 ▼</MenuButton>
                <MenuList>
                    <MenuItem>요리 설명 1</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};

export default DropDown;
