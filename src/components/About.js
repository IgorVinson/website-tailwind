import React from 'react';
import picture from "../img/image.jpg";

const About = () => {
    return (
        <div className="container">
            <div className="flex justify-between mt-40 lg:flex-col">
                <div className="flex flex-col w-1/2 lg:w-full">
                    <div className="text-darkred text-xl font-bold tracking-tight">
                        about us
                    </div>
                    <h2 className="mt-[2px] text-4xl font-black">The team behind the brand.</h2>
                    <p className="mt-[10px] max-w-sm text-lg lg:max-w-full">
                        Proin elementum fermentum auctor. Nulla semper, est eget congue pellentesque, erat nulla
                        molestie mi, in finibus leo nisl ac lectus. Praesent non urna. Nulla congue porta lectus in
                        laoreet. Aenean pellentesque vitae metus id porttitor.
                    </p>
                </div>
                <div className="flex flex-col w-[450px] lg:w-full">
                    <img src={picture} alt="about"/>
                </div>
            </div>
            <a href="#" className="inline-block py-[10px] px-8 shadow-customred bg-darkred hover:bg-lightred rounded-2xl
                        text-white text-xl tracking-tight mt-2 lg:w-full text-center">Learn more</a>
        </div>
    );
};

export default About;