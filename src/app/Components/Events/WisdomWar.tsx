'use client';
import React from 'react';

const WisdomWar = () => {
  const handleRegisterClick = () => {
    window.location.href = 'https://forms.gle/o2Uu72iaTZQdrRfR9'; // Replace with your actual Google Form link
  };
  return (
    <div className="relative h-auto bg-black text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-7" style={{ fontFamily: 'Nasalization, sans-serif' }}>
      {/* Title and new paragraph with button on the right end */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-6xl md:text-4xl text-yellow-300">Wisdom War</h1>
      </div>

      {/* Paragraph and button aligned separately */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-base md:text-lg">
          Venue: SCB Block Auditorium<br /> Price: Rs. 60(Per Head) 
        </p>
        <button onClick={handleRegisterClick} className="hidden md:block mt-3 md:mt-0 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center">
          REGISTER
        </button>
      </div>

      {/* Register button for small devices */}
      <div className="block md:hidden mt-4">
        <button onClick={handleRegisterClick} className="text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center w-full">
          REGISTER
        </button>
      </div>

      {/* Responsive paragraph content starts below the venue and button */}
      <div className="mt-10 flex flex-col items-center justify-center h-auto px-4 sm:px-8 text-left">
        <div style={{ fontFamily: 'JetBrains Mono, monospace' }} className="text-base md:text-lg lg:text-xl max-w-3xl overflow-wrap break-word leading-relaxed">
        <div>Do you have what it takes to outsmart your peers and claim the title of quiz champion? Wisdom War is your chance to prove it! This fun and exciting non-tech quiz will put your general knowledge and quick thinking to the test, with a range of questions from easy to hard.</div>

 <br /><div style={{ fontFamily: 'Nasalization, sans-serif' }} className='font-bold text-xl text-orange-600'>How It Works:</div>
<div className='pl-3'>- Get ready to tackle 40 questions with 3 different levels.
<br />- Start with some easy ones to warm up, but it will get tricky as you progress through the rounds!
<br />- The winners will be decided with the duo that scores the most.</div>

 <br /><div style={{ fontFamily: 'Nasalization, sans-serif' }} className='font-bold text-xl text-blue-800'>Scoring:</div>
<div className='pl-3'>- 1 point for each correct answer.
<br />- No pressure—no negative marking, so give it your best shot!</div>


 <br /><div style={{ fontFamily: 'Nasalization, sans-serif' }} className='font-bold text-xl text-yellow-700'>Why Join?</div>
<div className='pl-3'>- Test your knowledge in a fun, competitive environment.
<br />- Challenge yourself and rise to the top!
<br />- Show off your quick-thinking skills and win the competition!</div>

<br /><div>Think you &apos;re up for the challenge? Register now !!!</div>
 
        </div>
      </div>
    </div>
  );
};

export default WisdomWar;
