'use client';
import React from 'react';

const BrainGpt = () => {
  const handleRegisterClick = () => {
    window.location.href = 'https://forms.gle/joKusHcnQ8sEMZcT8'; // Replace with your actual Google Form link
  };
  const handleRegisterClick2 = () => {
    window.location.href = 'https://forms.gle/pQKh9oHVyCgc6tsm6'; // Replace with your actual Google Form link
  };
  return (
    <div className="relative h-auto bg-black text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-7" style={{ fontFamily: 'Nasalization, sans-serif' }}>
      {/* Title and new paragraph with button on the right end */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-6xl md:text-4xl  text-yellow-300">BrainGPT</h1>
      </div>

      {/* Paragraph and button aligned separately */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-base md:text-lg">
          Venue: JC Block & Seminar Hall<br /> Price: Rs. 40(Per Head) 
        </p>
        <button onClick={handleRegisterClick} className="hidden md:block mt-3 md:mt-0 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-5 py-3 text-center">
          REGISTER
        </button>
        <button onClick={handleRegisterClick2} className="hidden md:block mt-3 md:mt-0 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-5 py-3 text-center">
          REGISTER for Audience
        </button>
      </div>

      {/* Register button for small devices */}
      <div className="block md:hidden mt-4">
        <button onClick={handleRegisterClick} className="text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center w-full">
          REGISTER
        </button>
        <button onClick={handleRegisterClick2} className="mt-4 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center w-full">
          REGISTER for Audience
        </button>
      </div>

      {/* Responsive paragraph content starts below the venue and button */}
      <div className="mt-10 flex flex-col items-center justify-center h-auto px-4 sm:px-8 text-left">
        <div className="text-base md:text-lg lg:text-xl max-w-3xl overflow-wrap break-word leading-relaxed">
          <div className='text-2xl text-purple-300 font-bold' >***Audience are allowed only for the presentation round***</div><br />
        <div style={{ fontFamily: 'JetBrains Mono, monospace' }}>Are you ready to bring your ideas to life and solve real-world problems? Brain GPT is the platform for you! Whether you&apos;re a coder, designer, presenter, or visionary, we want YOU to be part of this dynamic event that unites diverse minds to create innovative and impactful solutions.</div>
          <br /><br />
          <div className='text-3xl'>What is Brain GPT?</div>
          <br />
          <div style={{ fontFamily: 'JetBrains Mono, monospace' }}>Brain GPT is an exciting 3-session event where teams of 4 can bring their best ideas—technical, non-technical, innovative, or impactful. We believe that when different minds collaborate, amazing things happen. You and your team will have the chance to brainstorm, get mentored, and present your ideas to a panel of judges who are eager to see what you can do!</div>
          <br /><br />
          <div className='text-3xl'>Agenda:</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace' }}><br/>Session 1: Providing the (abstract) lining of the idea
          <br />Session 2: Guidance by the mentors (4th-year students) and participants continuing to work on their idea
          <br />Session 3: Final presentation to the judges
          <br /><br /></div>
          <span className='text-orange-600'>Session 1:</span> The Abstract Round
          <div style={{ fontFamily: 'JetBrains Mono, monospace' }}><br />- You&apos;ll have 60 minutes to brainstorm, organize your thoughts, and pitch your idea to a group of mentors.
          <br />- Our mentors (4th-year students) will select the best two teams from each group to move forward to the next stage.
          <br /><br /></div>
          <span className='text-blue-800'>Session 2:</span> Guidance and Development
          <div style={{ fontFamily: 'JetBrains Mono, monospace' }}><br />- Get guidance from mentors (4th year students) who will help in building your idea concept. Whether it&apos;s strategy, execution, or creativity, they&apos;ve got your back!
          <br />- You&apos;ll spend the afternoon refining your solution.
          <br /><br /></div>
          <span className='text-yellow-700'>Session 3:</span> The Grand Finale
          <div style={{ fontFamily: 'JetBrains Mono, monospace' }}><br />- It&apos;s showtime! Present your idea in front of judges and an audience.
          <br />- How will your idea solve real-world challenges? What obstacles might you face, and how do you plan to overcome them? Impress the panel with your innovation and practical thinking!
          <br />- The team that scores the highest will be crowned Brain GPT Champions!
          <br /><br /></div>
          <div className='text-3xl'>Why should you join Brain GPT?</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace' }}><br />- Collaborate with students from different branches. Broaden your network.
          <br />- Showcase your innovative solutions to real-world challenges.
          <br />- Win the chance to be recognized for your creative and impactful ideas.</div>
        </div>
      </div>
    </div>
  );
};

export default BrainGpt;
