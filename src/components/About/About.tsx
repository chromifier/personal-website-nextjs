"use client";

/* eslint-disable react/no-unescaped-entities */
import { motion, useInView } from 'framer-motion';
import 'animate.css';
import Image from 'next/image';
import React, { Ref, RefObject, useEffect, useRef } from 'react';
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
        }
    }, [aboutInView]);

    return (
        <motion.div
            className="max-w-full bg-primary about pt-6 pb-28 antialiased text-primary-content flex flex-col lg:flex-row justify-between overflow-hidden relative"
            id="about"
        >
            <div ref={aboutRef} id="about-content" className='m-auto max-w-lg p-3 order-last lg:order-first animate__animated opacity-0'>
                <h1 className="text-7xl mb-5 text-center lg:text-left"><span className='text-secondary'>About </span>Me</h1>
                <p className='leading-7'>
                    Passionate Front End Engineer with a flair for innovative web development solutions. Leveraging a unique background of being a self-taught engineer, I bring a unique blend of technical proficiency and problem-solving intuition. I am a fellow in a competitive Software Engineering fellowship called Formation, where I’ve gone through intensive training to master computer science fundamentals through coding exercises through independent study, pair programming, and small mentor-led groups. I’m aspiring to be part of a dynamically skilled team of software engineers, I am eager to join a group where diverse educational backgrounds converge.
                </p>
            </div>
            <Image
                src={headshot}
                alt="Me"
                width={400}
                id="about-image"
                className='rounded-badge m-auto order-first lg:order-last mb-4 animate__animated opacity-0 p-3'
            />
            <div className="custom-shape-divider-bottom-1704498453">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </motion.div>

    );
}

export default About;