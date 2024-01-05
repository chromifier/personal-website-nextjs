"use client";

/* eslint-disable react/no-unescaped-entities */
import { motion, useInView } from 'framer-motion';
import 'animate.css';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import headshot from '@/assets/headshot.jpg';

function About() {
    const aboutRef = useRef(null);
    const aboutInView = useInView(aboutRef, { margin: "0px 0px -300px 0px" });

    useEffect(() => {
        const aboutContent = document.getElementById("about-content");
        const aboutImage = document.getElementById("about-image");

        if (aboutInView) {
            aboutContent?.classList.add("animate__fadeInLeft");
            aboutContent?.classList.remove("animate__fadeOutLeft");
            aboutImage?.classList.add("animate__fadeInRight");
            aboutImage?.classList.remove("animate__fadeOutRight");
        } else {
            aboutContent?.classList.add("animate__fadeOutLeft");
            aboutContent?.classList.remove("animate__fadeInLeft");
            aboutImage?.classList.add("animate__fadeOutRight");
            aboutImage?.classList.remove("animate__fadeInRight");
        }
    }, [aboutInView]);

    return (
        <motion.div
            className="max-w-full bg-primary about pt-6 pb-28 antialiased text-base-200 flex flex-col lg:flex-row justify-between overflow-hidden relative"
        >
            <div ref={aboutRef} id="about-content" className='m-auto max-w-lg p-3 order-last lg:order-first animate__animated'>
                <h1 className="text-7xl mb-5 text-center lg:text-left">About <span className='text-secondary'>Me</span></h1>
                <p className='leading-7'>
                    Passionate Front End Engineer with a flair for innovative web development solutions. Leveraging a unique background of being a self-taught engineer, I bring a unique blend of technical proficiency and problem-solving intuition. I am a fellow in a competitive Software Engineering fellowship called Formation, where I’ve gone through intensive training to master computer science fundamentals through coding exercises through independent study, pair programming, and small mentor-led groups. I’m aspiring to be part of a dynamically skilled team of software engineers, I am eager to join a group where diverse educational backgrounds converge.
                </p>
            </div>
            <Image
                src={headshot}
                alt="Me"
                width={400}
                id="about-image"
                className='rounded-badge m-auto order-first lg:order-last mb-4 animate__animated'
            />
            <div className="custom-shape-divider-bottom-1704492215">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </motion.div>

    );
}

export default About;