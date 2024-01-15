"use client";

import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import ResumeCard from './ResumeCard';
import { softwareJobs } from '@/src/lib/jobs.ts';

function Resume() {
    const resumeRef = useRef(null);
    const resumeInView = useInView(resumeRef, { margin: "0px 0px -200px 0px" });

    useEffect(() => {
        const resume = document.getElementById("resume-content");

        if (resumeInView) {
            resume?.classList.add("animate__fadeIn");
            resume?.classList.remove("animate__fadeOut");
        }
    }, [resumeInView]);

    const recentThreeJobs = softwareJobs.slice(0, 3);

    return (
        <motion.div
            className="max-w-full bg-secondary md:p-10 p-4 antialiased text-base-200 relative overflow-hidden"
            id="resume"
            layout
        >

            <div id="resume-content" ref={resumeRef} className='animate__animated opacity-0 mb-4'>
                <h1 className="text-5xl xl:mr-20 mb-5 text-center xl:text-right order-last">My <span className='text-primary'>Experience</span></h1>
                <div className='flex flex-col xl:flex-row xl:items-stretch items-center text-primary gap-6'>
                    {
                        recentThreeJobs.map((job, i) => (
                            <ResumeCard key={i} job={job[0]} company={job[1]} dates={job[2]} companyURL={job[3]} content={job[4]} />
                        ))
                    }
                </div>
            </div >
            <div className='max-w-lg m-auto animate__animated flex flex-col lg:flex-row'>
                <Link href="resume.pdf" target='_blank' className='btn btn-primary m-auto max-w-[200px] flex items-center mb-4'>View My Resume</Link>
                <Link href="/experiences" className='btn btn-primary m-auto max-w-[200px] flex items-center mb-4'>View My Timeline</Link>
            </div>
        </motion.div >
    );
}

export default Resume;