import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-full max-w-xs mx-auto'>
            <button
                className='w-full text-left bg-white border border-gray-300 text-gray-700 rounded-md py-2  flex justify-between items-center'
                onClick={toggleDropdown}
            >
                <Link href='#'>요리명</Link> <ChevronDown />
            </button>
            <div
                className={`mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg ${isOpen ? '' : 'hidden'}`}
            >
                <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                    요리 설명 1
                </a>
            </div>
        </div>
    );
};

export default DropDown;
