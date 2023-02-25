import React from 'react';

const HamburgerBtn = ({menuHandler}) => {
    return (
        <div onClick={menuHandler} className="space-y-2 hidden md:block">
            <div className="w-8 h-0.5 bg-gray-400"></div>
            <div className="w-8 h-0.5 bg-gray-400"></div>
            <div className="w-8 h-0.5 bg-gray-400"></div>
        </div>
    );
};

export default HamburgerBtn;