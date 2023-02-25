import React from 'react';

const MobileMenu = () => {
    return (
        <ul className="absolute left-6 right-6 top-24 bg-lightred flex flex-col items-center ">
            <li><a href="#" className="block py-4 text-white">About</a></li>
            <li><a href="#" className="block py-4 text-white">Services</a></li>
            <li><a href="#" className="block py-4 text-white">Case Studies</a></li>
            <li><a href="#" className="block py-4 text-white">Careers</a></li>
            <li><a href="#" className="block py-4 text-white">Blog</a></li>
        </ul>
    );
};

export default MobileMenu;