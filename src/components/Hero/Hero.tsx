"use client";

/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function Hero() {
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        setIsPageLoaded(true);
    }, []);
    return (
        <>
            <motion.div
                layout
                className="hero min-h-screen relative"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
            >
                <div className="hero-overlay bg-opacity-20"></div>
                <motion.div className="hero-content text-center text-neutral-content scale-0 opacity-0"
                    animate={{
                        scale: [0.75, 1],
                        opacity: [0, 1]
                    }}
                    viewport={{ once: true }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1.5,
                    }}
                >
                    <div className="max-w-md">
                        <div className="landing-logo large-12 border-wrap">
                            <h1 className={isPageLoaded ? "border-logo border-logo-load" : "border-logo"}>JM</h1>
                        </div>
                        <p className="mb-5 text-4xl text-primary">Let's Work Together</p>
                    </div>
                </motion.div>
                <div className="custom-shape-divider-bottom-1704498595">
                    <motion.a
                        className='btn-circle relative top-10 hover:animate-pulse transition-all block m-auto opacity-0 z-10 cursor-pointer'
                        animate={{
                            opacity: [0, 1]
                        }}
                        viewport={{ once: true }}
                        transition={{
                            ease: "easeInOut",
                            duration: 1.5,
                            delay: 1
                        }}
                        onClick={() => {
                            const el = document.getElementById("about");
                            el?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        <svg className="w-6 h-6 text-primary arrowDown" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </motion.a>
                    <svg className='hero-divider' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className="shape-fill"></path>
                    </svg>
                </div>
            </motion.div>
        </>
    );
}

export default Hero;