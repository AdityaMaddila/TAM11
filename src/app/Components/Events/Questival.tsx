'use client';
import React from 'react';

const Questival = () => {
  const handleRegisterClick = () => {
    window.location.href = 'https://forms.gle/qqfv13q7Vf88PxucA'; // Replace with your actual Google Form link
  };
  return (
    <div className="relative h-auto bg-black text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-7" style={{ fontFamily: 'Nasalization, sans-serif' }}>
      {/* Title and new paragraph with button on the right end */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-6xl md:text-4xl  text-yellow-300">Questival</h1>
      </div>

      {/* Paragraph and button aligned separately */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-base md:text-lg">
          Venue: Seminar Hall, JC Block, Outdoor Sports Arena<br /> Price: Rs. 60(Per Head) 
        </p>
        <button onClick={handleRegisterClick} className="hidden md:block mt-3 md:mt-0 text-white bg-orange-700 hover:bg-orange-400 focus:outline-none font-medium rounded-full text-sm px-5 py-3 text-center">
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
        <div className="text-base md:text-lg lg:text-xl max-w-3xl overflow-wrap break-word leading-relaxed">
        <div style={{ fontFamily: 'JetBrains Mono, monospace' }}>Come join us for this one-of-a-kind experience that blends mental sharpness, physical prowess, and adventurous fun. Whether you excel in memory, fitness, or problem-solving, Questival is your chance to shine!</div>
<br /><div className='text-3xl'>Selection Rounds:</div>
<div className='pl-3' style={{ fontFamily: 'JetBrains Mono, monospace' }}><br />Round 1 : Memory Room
<br />Round 2 : BASE (Balance, Agility, Strength, Endurance)
<br />Round 3 : The Final Destination (Treasure Hunt)</div>
<br /><div style={{ fontFamily: 'JetBrains Mono, monospace' }}>All the participants will undergo a series of selection rounds where they will showcase their team spirit. There will be three rounds in which the selection is going to be held for the final and the main mystery to be solved.</div>
<br /><div className='text-3xl'>Selection Rounds:</div>
<br /><div className='text-2xl pl-5 text-orange-600'>ROUND 1- Memory Room</div>
<br /><div className='pl-8' style={{ fontFamily: 'JetBrains Mono, monospace' }}>Here, the teams will be entering a room full of 30-40 elements. All the team members have to memorize everything and then note it down. The team that gets the most elements right will move on to the next round.</div>
<br /><br /><div className='text-2xl pl-5 text-blue-800'>ROUND 2- BASE (Balance, Agility, Strength, Endurance)</div>
<br /><div className='pl-8' style={{ fontFamily: 'JetBrains Mono, monospace' }}>In this thrilling penultimate round, teams will engage in a sequence of physical and mental challenges, each testing one of the four key elements: Balance, Agility, Strength, and Endurance. The ultimate goal is to collaboratively build a 10-cup tower, with each layer added after completing a specific challenge.
<br /><br /><span className='text-purple-400 dark:text-purple-400'><span className='font-bold text-2xl'>Note :</span> No member can compete in more than one element.</span>
<br /><br />Time will be tracked for the entire team as they complete the sequence. The team that completes the tower in the least amount of time will secure a spot in the Final Destination round. Teamwork, coordination, and speed are critical to success in this stage.
<br /><br /><span className='font-bold text-2xl'>Agility</span> (Base Layer - 4 Cups):
<br /><br /><span className='pl-3'>The round begins with a running race, where each team member must carry two cups at a time through a predefined path. Their agility will be tested as they work together to form the first base of the tower with 4 cups.</span>
<br /><br /><span className='font-bold text-2xl'>Endurance</span> (Middle Layer - 3 Cups):
<br /><br /><span className='pl-3'>The next challenge tests your endurance with a hopping task, where your team will build the crucial middle layer of 3 cups, adding much-needed stability to your tower.</span>
<br /><br /><span className='font-bold text-2xl'>Balance</span> (Second-to-Last Layer - 2 Cups):
<br /><br /><span className='pl-3'>Teams will then face a lemon and spoon race, where participants must balance a spoon with a lemon while also carrying 2 cups. This tests precision and composure as they place the cups to form the second-to-last layer of the tower.</span>
<br /><br /><span className='font-bold text-2xl'>Strength</span> (Final Cup):
<br /><br /><span className='pl-3'>In the final challenge, the team &apos;s strength will be put to the test. One member will carry weights while holding the final cup, carefully placing it on top to complete the tower.</span></div>
<br /><br /><div className='text-2xl pl-5 text-yellow-700'>ROUND 3 - THE FINAL DESTINATION</div>
<br /><div className='pl-8' style={{ fontFamily: 'JetBrains Mono, monospace' }}>The teams will be given five clues to solve. The initial three clues are different for each team. The last two clues are common to all five teams. The team to solve the clues and find the treasure first will be considered the winners.</div>

        </div>
      </div>
    </div>
  );
};

export default Questival;
