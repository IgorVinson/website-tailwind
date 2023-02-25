import React from "react";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import Logo from '../img/Logo.svg'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-[164px]">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between">
                    <div>
                        <img src={Logo} alt="logo" className="w-24" />
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et felis vitae mi laoreet bibendum vel euismod ipsum.</p>
                        <div className="flex mt-4">
                            <input type="email" placeholder="Your email" className="bg-gray-700 rounded-l-md py-2 px-4 text-white w-full" />
                            <button className="bg-darkred hover:bg-lightred rounded-r-md py-2 px-4 text-white">Subscribe</button>
                        </div>
                    </div>
                    <div>
                        <ul className="text-center">
                            <li className="my-2"><a href="#">About</a></li>
                            <li className="my-2"><a href="#">Contact</a></li>
                            <li className="my-2"><a href="#">Services</a></li>
                            <li className="my-2"><a href="#">Case Studies</a></li>
                            <li className="my-2"><a href="#">Blog</a></li>
                        </ul>
                        <div className="flex justify-end mt-4">
                            <a href="#" className="mr-4"><AiFillFacebook size={30} /></a>
                            <a href="#"><AiFillTwitterCircle size={30} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
