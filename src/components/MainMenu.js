import React from 'react';

const MainMenu = () => {
    return (
        <ul className="flex gap-12 md:hidden">
            <li><a href="#"
                   className="font-medium text-xl text-lightblack hover:text-darkred lg:text-base">About</a>
            </li>
            <li><a href="#"
                   className="font-medium text-xl text-lightblack hover:text-darkred lg:text-base">Services</a>
            </li>
            <li><a href="#" className="font-medium text-xl text-lightblack hover:text-darkred lg:text-base">Case
                Studies</a></li>
            <li><a href="#"
                   className="font-medium text-xl text-lightblack hover:text-darkred lg:text-base">Careers</a>
            </li>
            <li><a href="#"
                   className="font-medium text-xl text-lightblack hover:text-darkred lg:text-base">Blog</a>
            </li>
        </ul>
    );
};

export default MainMenu;