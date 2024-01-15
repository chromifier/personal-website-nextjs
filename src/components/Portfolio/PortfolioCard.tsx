import next from 'next';
import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

type PortfolioCardProps = {
    staticImage: StaticImageData,
    imageName: string,
    projectURL: string;
};


function PortfolioCard({ staticImage, imageName, projectURL }: PortfolioCardProps) {
    return (
        <div className='card overflow-hidden max-h-[250px]'>
            <a href={projectURL} className='cursor-pointer brightness-75 transition-all duration-[300ms] hover:scale-[1.03] hover:brightness-100'>
                <Image
                    src={staticImage}
                    width={250}
                    alt={imageName}
                    className='card projectSmImage'
                />
            </a>
        </div>
    );
}

export default PortfolioCard;