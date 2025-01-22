'use client';
import React from 'react';

const CulturalBytes = () => {
  const handleRegisterClick2 = () => {
    window.location.href = 'https://forms.gle/t98R2ZQbCtSYSdQA7'; // Replace with your actual Google Form link
  };
  return (
    <div className="relative h-auto bg-black text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-7" style={{ fontFamily: 'Nasalization, sans-serif' }}>
      {/* Title and new paragraph with button on the right end */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-6xl md:text-4xl  text-yellow-300">Cultural Bytes</h1>
      </div>

      {/* Paragraph and button aligned separately */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-base md:text-lg">
          Venue: SCB Block Auditorium<br /> Price: Rs. 50(Audience)
        </p>
        
        <button onClick={handleRegisterClick2} className="hidden md:block mt-3 md:mt-0 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center">
          REGISTER for Audience
        </button>
      </div>

      {/* Register button for small devices */}
      <div className="block md:hidden mt-4">
        
        <button onClick={handleRegisterClick2} className="mt-4 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-5 py-3 text-center w-full">
          REGISTER for Audience
        </button>
      </div>

      {/* Responsive paragraph content starts below the venue and button */}
      <div className="mt-10 flex flex-col items-center justify-center h-auto px-4 sm:px-8 text-left">
        <div style={{ fontFamily: 'JetBrains Mono, monospace' }} className="text-base md:text-lg lg:text-xl max-w-3xl overflow-wrap break-word leading-relaxed">
        <div className='font-bold text-2xl text-purple-300'>**Ooops!!! You missed the opportunity...**</div><br />
        <div>But NO WORRIES... You can still be a part of it as Audience.</div>
        <div>Get ready to experience an afternoon full of performances.</div>
        <br /><div className='pl-4'><span className='text-orange-700'> Dance Performances </span>: Solo, Duo, Group
        <br /><span className='text-blue-500'>Singing Performances </span>: Solo, Duo 
        <br /><span className='text-yellow-300'>Special Performances</span> (Example: Stand-up comedy, Beatboxing etc)</div>
        <br /><div>So Why Waiting Register Soon before you miss this TOO...</div> 
        </div>
      </div>
    </div>
    
  );
};

export default CulturalBytes;
