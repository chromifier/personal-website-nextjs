"use client";

import { motion } from 'framer-motion';
import React from 'react';
import emberImage from '@/assets/ember-and-clay-project.png';
import eagSearchExample from '@/assets/eag-search-example.png';
import personalWebsite from '@/assets/personal-website-project.png';
import Image from 'next/image';
import PortfolioCard from './PortfolioCard';

function Portfolio() {
    return (
        <motion.div
            className="max-w-full bg-primary pt-32 pb-10 pl-3 pr-3 antialiased text-primary-content overflow-hidden relative"
            id="portfolio"
        >
            <div className="custom-shape-divider-top-1704929955">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className='m-auto max-w-lg p-3 animate__animated block'>
                <h1 className="text-7xl mb-5 text-center">My <span className='text-secondary'>Portfolio</span></h1>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 lg:justify-center items-center'>
                <div className='card overflow-hidden max-h-[600px]'>
                    <a href="#"
                        className='cursor-pointer brightness-75 transition-all duration-[300ms] hover:scale-[1.03] hover:brightness-100'
                    >
                        <Image
                            src={personalWebsite}
                            width={600}
                            alt="My Personal Website"
                        />
                    </a>
                </div>
                <div className='md:grid md:grid-flow-col-reverse md:grid-cols-2 md:grid-rows-2 gap-4 flex flex-col items-center'>
                    <PortfolioCard staticImage={eagSearchExample} imageName='Executive Advantage Search Example' projectURL='https://executive-advantage.com/Exabeam_Prod_Mgr/' />
                    <PortfolioCard staticImage={emberImage} imageName='Ember + Clay Project Image' projectURL='https://emberandclayshop.com/' />
                </div>
            </div>
        </motion.div>
    );
}

export default Portfolio;