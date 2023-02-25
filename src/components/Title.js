import React from 'react';

const Title = () => {
    return (
        <main>
            <div className="container">
                <h1 className="pt-24 font-black text-5xl max-w-2xl text-center mx-auto leading-snug lg:text-4xl lg:pt-16
                        md:text-3xl md:pt-12 md:max-w-full sm:pt-10 sm:text-2xl ">Grow your business online.
                    Get. More. Leads.</h1>
                <p className="text-xl tracking-tight text-center max-w-xl mt-[18px] mx-auto md:text-lg">Wanna get serious into digital marketing? Then you need leads and this is where we can help you.</p>
            </div>
            <div className="flex justify-center gap-7">
                <a href="#" className="inline-block mt-6 py-[10px] px-8 shadow-customred bg-darkred hover:bg-lightred rounded-2xl
                        text-white text-xl tracking-tight">Start here</a>
                <a href="#" className="inline-block mt-6 py-[10px] px-8 shadow-customred rounded-2xl
                        text-black text-xl tracking-tight text-black border-2 border-lightred">Learn more</a>
            </div>
        </main>
    );
};

export default Title;