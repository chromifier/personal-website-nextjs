"use client";

/* eslint-disable react/no-unescaped-entities */
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import headshot from '@/assets/headshot.jpg';

function About() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="max-w-full bg-primary about p-6 antialiased text-base-200 flex flex-row"
            viewport={{ once: true }}
            style={{ opacity: scrollYProgress }}
        >
            <div className='max-w-lg m-auto'>
                <h1 className="text-7xl mb-5">About <span className='text-secondary'>Me</span></h1>
                <p>
                    Passionate Front-End Engineer with a flair for innovative web development solutions. Leveraging a background in streamlining executive recruitment processes and successfully migrating projects to the LAMP stack, I bring a unique blend of technical proficiency and problem-solving acumen. Currently refining skills at Formation Dev, I thrive on creating impactful web solutions, evident in projects like Ember + Clay. Let's connect and explore opportunities to collaborate on cutting-edge web development ventures.
                </p>
                {/* <p className='mb-5'>I'm a self-taught Web Developer that was brought into the field through multiple veterans who provided years of mentorship. Detail-oriented, experienced, front-end web developer containing:</p>
                <ul className='list-disc'>
                    <li>4+ years of hands-on frontend experience, efficiently developing and deploying websites and applications using modern HTML, CSS, Bootstrap, JavaScript, and jQuery.</li>
                    <li>2+ years of hands-on backend experience working with the LAMP stack (Linux, Apache, MySQL, PHP) and creating custom WordPress themes.</li>
                    <li>1 year of hands-on experience developing in React</li>
                </ul> */}
            </div>

            <Image
                src={headshot}
                alt="Me"
                width={400}
                className='rounded-badge m-auto '
            />
        </motion.div>
    );
}

export default About;