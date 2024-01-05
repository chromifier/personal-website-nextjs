"use client";

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

function Resume() {
    return (
        <motion.div
            className="max-w-full bg-secondary p-8 antialiased text-base-200 relative"
        >

            <div className='m-auto'>
                <h1 className="text-3xl mb-8 text-center">Check out my resume here</h1>
                <button className='btn btn-primary m-auto block'>Download my Resume</button>
            </div>

        </motion.div>
    );
}

export default Resume;