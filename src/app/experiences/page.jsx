import React from 'react';
import { softwareJobs, education, otherJobs } from '@/src/lib/jobs.js';
import ExperienceCard from './ExperienceCard';
import Link from 'next/link';

function experiences() {
    return (
        <div id="experience-content" className='bg-primary p-3 relative'>
            <Link href="/#resume" className='btn btn-primary-content mb-5 sticky'>Back</Link>
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
                <h1 className="text-5xl mb-5 text-center text-secondary">Educational <span className='text-primary-content'>History</span></h1>
                <div className='flex flex-wrap content-center justify-center text-primary gap-4'>
                    {
                        education.map((job, i) => (
                            <ExperienceCard key={i} job={job[0]} company={job[1]} companyURL={job[2]} content={job[3]} />
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