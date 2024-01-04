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
                className="hero min-h-screen"
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
                        duration: 1,
                    }}
                >
                    <div className="max-w-md">
                        <div className="landing-logo large-12 border-wrap">
                            <h1 className={isPageLoaded ? "border-logo border-logo-load" : "border-logo"}>JM</h1>
                        </div>
                        <p className="mb-5 text-4xl text-primary">Let's Work Together</p>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

export default Hero;