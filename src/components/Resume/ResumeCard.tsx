import React from 'react';

type ResumeCardProps = {
    job: string | string[],
    company: string | string[],
    dates: string | string[],
    companyURL: string | string[],
    content: string[] | String[],
};

function ResumeCard({ job, company, dates, companyURL, content }: ResumeCardProps) {
    return (
        <div className='max-w-lg p-6 mb-4 animate__animated card bg-base-200 bg-opacity-80 flex-wrap'>
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

export default ResumeCard;