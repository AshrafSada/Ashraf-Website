import React, { useState } from 'react';

const Hero = () => {
    let currDate = new Date();
    return (
        <section
            className="min-h-screen w-full flex flex-col items-center justify-center relative bg-gray-900"
            id="hero"
            role="presentation"
            aria-label="Hero Section">
            <div className="w-full mx-auto sm:mt-36 sm:px-10 px-5 p-0 m-0">
                <p className="text-2xl flex items-center justify-start gap-6 text-white">
                    Hi, Let's start coding
                    <span className="text-xl text-green-400">
                        {currDate.toLocaleTimeString()}&nbsp; &#8286; &nbsp; C:\Users\Ashraf&gt;
                        <span className="text-3xl font-bold animate-blink">&#95;</span>&#173;
                    </span>
                </p>
                <p className="text-base text-gray-400">Full Stack Developer&#47;Team Leader</p>
            </div>
        </section>
    );
};

export default Hero;
