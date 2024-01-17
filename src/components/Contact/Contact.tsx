"use client";

import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useFormStatus } from 'react-dom';

function Contact() {
    const form = useRef(null);
    const [messageSent, setMessageSent] = useState(false);
    const [sendingStatus, setSendingStatus] = useState(false);
    const { pending } = useFormStatus();

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setSendingStatus(true);

        emailjs.sendForm('service_gu3ae3w', 'template_qay4r3q', form.current, 'xwU1XkLdTeRSwl3Br')
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
                setSendingStatus(false);
            }, (error) => {
                console.log(error.text);
                setSendingStatus(false);
            });
    };
    return (
        <div className='relative'>

            <div className="custom-shape-divider-top-1705523216">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div id="contact" className='bg-base-100 text-base-content p-10'>

                <h1 className='text-center text-5xl mt-20'>Contact Me</h1>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-lg m-auto mt-4'>
                    <div className='mb-3'>
                        <div className="label">
                            <span className="label-text">Name*</span>
                        </div>
                        <input name="from_name" type="text" required className="input input-bordered input-primary w-full" />
                    </div>
                    <div className='mb-3'>
                        <div className="label">
                            <span className="label-text">Email*</span>
                        </div>
                        <input name="email" type="email" required className="input input-bordered input-primary w-full" />
                    </div>
                    <div className='mb-3'>
                        <div className="label">
                            <span className="label-text">Subject*</span>
                        </div>
                        <input name="subject" type="text" required className="input input-bordered input-primary w-full" />
                    </div>
                    <div className='mb-3'>
                        <div className="label">
                            <span className="label-text">Message*</span>
                        </div>
                        <textarea name="message" required className="textarea textarea-bordered textarea-primary w-full" />
                    </div>
                    <div className='mb-3 text-center'>
                        <button type="submit" className='btn btn-base-content'>
                            Send Message
                            {sendingStatus && <span className="loading loading-spinner" />}
                        </button>

                    </div>
                </form>
                {
                    messageSent &&
                    <p className='text-center mt-3 text-green-700 p-2 rounded-md'>Message Delivered</p>
                }
            </div>
        </div >
    );
}

export default Contact;;