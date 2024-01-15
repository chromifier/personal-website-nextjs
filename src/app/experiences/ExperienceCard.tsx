import React from 'react';

type ExperienceCardProps = {
    job: string | string[],
    company: string | string[],
    dates: string | string[],
    companyURL: string | string[],
    content: string[] | String[],
};

function ExperienceCard({ job, company, dates, companyURL, content }: ExperienceCardProps) {
    return (
        <div className='max-w-lg p-6 mb-4 animate__animated card bg-base-100 text-base-content bg-opacity-80 flex-wrap'>
            <h3 className='text-2xl mb-2 font-semibold'>{job} at <a className='block text-info hover:text-warning transition-color duration-300' href={companyURL.toString()}>{company}</a></h3>
            <span>{dates}</span>
            <ul className='list-disc p-3'>
                {

                    content.map((info, i) => (
                        <li key={i}>{info}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ExperienceCard;