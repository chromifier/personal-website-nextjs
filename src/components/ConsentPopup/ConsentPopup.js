'use client';

import React, { useState, useEffect } from 'react';

const ConsentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('userConsent');
    if (consent !== 'granted') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('userConsent', 'granted');
    setIsVisible(false);
    // Here, trigger the loading of analytics scripts
  };

  const handleDecline= () => {
    localStorage.setItme('userConsent', 'declined');
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className='flex items-center flex-col' style={{ position: 'fixed', zIndex: "20", bottom: '20px', right: '20px', backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
      <p>We use cookies to improve your experience. By continuing, you agree to our use of cookies.</p>
      <div className='mt-4 flex flex-row gap-4'>
        <button className='btn btn-info text-center' onClick={handleAccept}>Accept</button>
        <button className='btn btn-warning' onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default ConsentPopup;
