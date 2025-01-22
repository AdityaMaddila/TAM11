'use client';
import React from 'react';

const CodeClash = () => {
  const handleRegisterClick = () => {
    window.location.href = 'https://forms.gle/qZV9px2xkTCDdsfB9'; // Replace with your actual Google Form link
  };
  return (
    <div className="relative h-auto bg-black text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-7" style={{ fontFamily: 'Nasalization, sans-serif' }}>
      {/* Title and new paragraph with button on the right end */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-6xl md:text-4xl text-yellow-300">Code Clash</h1>
      </div>

      {/* Paragraph and button aligned separately */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-base md:text-lg">
          Venue: JC Block -3rd Floor<br /> Price: Rs. 60 
        </p>
        <button onClick={handleRegisterClick} className="hidden md:block mt-3 md:mt-0 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-5 py-3 text-center">
          REGISTER
        </button>
      </div>

      {/* Register button for small devices */}
      <div className="block md:hidden mt-4">
        <button onClick={handleRegisterClick} className="text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-5 py-3 text-center w-full">
          REGISTER
        </button>
      </div>

      {/* Responsive paragraph content starts below the venue and button */}
      <div className="mt-10 flex flex-col items-center justify-center h-auto px-4 sm:px-8 text-left">
        <div className="text-base md:text-lg lg:text-xl max-w-3xl overflow-wrap break-word leading-relaxed">
        <div style={{ fontFamily: 'JetBrains Mono, monospace' }}>Do you have what it takes to solve tricky Data Structures and Algorithms problems under pressure? Code Clash is designed for those who love pushing their coding limits. This three-round event will test your DSA expertise, with each round getting progressively tougher.</div>
<br /><br /><div className='text-3xl text-orange-600'>Agenda:</div>
<div style={{ fontFamily: 'JetBrains Mono, monospace' }}><br /> Three intense rounds back-to-back, each with a time limit of around 1 hour.
<br /> 1st Round (Easy) → 2nd Round (Medium) → 3rd Round (Hard) – the challenge escalates quickly!</div>

<br /><br /><div className='text-3xl text-blue-800'>How It Works:</div>
<div style={{ fontFamily: 'JetBrains Mono, monospace' }}><br /> You &apos;ll receive a DSA question sheet containing around 50-60 questions.
<br /> Each round will be a battle of speed and accuracy:
<br /> <div className='pl-3'>- Round 1 (Easy): 5 easy questions to solve.</div>
<br /> <div className='pl-3'>- Round 2 (Medium): 3 medium-level questions.</div>
<br /> <div className='pl-3'>- Round 3 (Hard): 1 hard question to challenge your skills.</div>
<br /> Can &apos;t complete the questions in time? You &apos;ll be eliminated.
<br /> The participant who attempts the most questions is the winner !</div>

<br /><br /><div className='text-3xl text-yellow-700'>Why should you join Code Clash?</div>
<div style={{ fontFamily: 'JetBrains Mono, monospace' }}><br />- Get a chance to sharpen your problem-solving abilities in a competitive setting.
<br />- Showcase your mastery of algorithms and data structures.
<br />- Hone your DSA skills and prepare yourself for coding interviews.</div>
        </div>
      </div>
    </div>
  );
};

export default CodeClash;
