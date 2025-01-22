'use client';
import React from 'react';

const ContentCrafters = () => {
  const handleRegisterClick = () => {
    window.location.href = 'https://forms.gle/r2jC4GibyZNra7uF9'; // Replace with your actual Google Form link     
  };
  return (
    <div className="relative h-auto bg-black text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-7" style={{ fontFamily: 'Nasalization, sans-serif' }}>
      {/* Title and new paragraph with button on the right end */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-6xl md:text-4xl text-yellow-300">Content Crafters</h1>
      </div>

      {/* Paragraph and button aligned separately */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-base md:text-lg">
          Venue: JC Block<br /> Price: Rs. 60(Per Head) 
        </p>
        <button onClick={handleRegisterClick} className="hidden md:block mt-3 md:mt-0 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center">
          Register
        </button>
      </div>

      {/* Register button for small devices */}
      <div className="block md:hidden mt-4">
        <button onClick={handleRegisterClick} className="text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-5 py-3 text-center w-full">
        Register
        </button>
      </div>

      {/* Responsive paragraph content starts below the venue and button */}
      <div className="mt-10 flex flex-col items-center justify-center h-auto px-4 sm:px-8 text-left">
        <div style={{ fontFamily: 'JetBrains Mono, monospace' }} className="text-base md:text-lg lg:text-xl max-w-3xl overflow-wrap break-word leading-relaxed">
        Are you ready to show off your creative skills in a competition that&apos;s all about imagination and innovation? Content Crafters is the event for you! Whether you&apos;re a pro at crafting perfect prompts or a whiz at video editing, this is your chance to shine.

<div className='text-orange-600'><br /><br />1. PromptGen (AI-Generated Images):</div>
<div className='pl-5'>   <br />- Got a way with words? Use your creativity to write prompts that generate stunning images using AI tools. Craft a prompt that brings your vision to life and see how it transforms into a masterpiece. The most creative and visually striking images win!</div>
   
<div className='text-blue-800'><br /><br />2. Reel It In (Reel Creation):</div>
<div className='pl-5'> <br /> <span className='text-2xl font-bold text-purple-300'>**Only limited registrations (15 teams only)**</span><br /><br />Cash Prices :
<div className='pl-3 font-bold text-purple-300'><br />- First Winner - 6000/-
<br />- Second Winner - 5000/-
<br />- Third Winner - 4000/-</div><br />- Love video editing? We just have the right competition for you.
<br /><br />
Create a 30-60 second reel showcasing your favorite spots on campus. Capture the essence of college life, edit your footage, and create a reel that promotes the college in a fun and engaging way. The best video wins!
</div>

<div className='text-yellow-700'><br /><br />Why Participate?</div>
<div className='pl-5'>
<br />- Showcase Your Creativity: Whether it&apos;s through AI-generated images or creating eye-catching reels, you&apos;ll have a platform to express your creativity.
<br />- Learn and Compete: You&apos;ll get the chance to learn and compete in a fun, creative environment alongside other talented students.
<br />- Amazing Prizes: Win exciting prizes and bragging rights as the best Content Crafter!
</div>
<br /><br />Don&apos;t miss out—register now and get ready to unleash your creative genius at Content Crafters!

        </div>
      </div>
    </div>
  );
};

export default ContentCrafters;
