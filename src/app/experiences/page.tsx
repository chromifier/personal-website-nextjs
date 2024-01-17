import React from 'react';
import { softwareJobs, otherJobs } from '@/src/lib/jobs.ts';
import ExperienceCard from './ExperienceCard';
import Link from 'next/link';

function experiences() {
    return (
        <div id="experience-content" className='bg-primary p-10'>
            <Link href="/#resume" className='btn btn-primary-content mb-5'>Back</Link>
            <div>
                <h1 className="text-5xl mb-5 text-center text-secondary">Software Engineering <span className='text-primary-content'>Experience</span></h1>
                <div className='flex flex-wrap content-center justify-center text-primary gap-4'>
                    {
                        softwareJobs.map((job, i) => (
                            <ExperienceCard key={i} job={job[0]} company={job[1]} dates={job[2]} companyURL={job[3]} content={job[4]} />
                        ))
                    }
                </div>
            </div>
            <div className='mt-6'>
                <h1 className="text-5xl mb-5 text-center text-secondary">Other <span className='text-primary-content'>Experience</span></h1>
                <div className='flex flex-wrap content-center justify-center text-primary gap-4'>
                    {
                        otherJobs.map((job, i) => (
                            <ExperienceCard key={i} job={job[0]} company={job[1]} dates={job[2]} companyURL={job[3]} content={job[4]} />
                        ))
                    }
                </div>
            </div>
        </div >
    );
}

export default experiences;