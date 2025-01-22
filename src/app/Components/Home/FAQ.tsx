import React, { useState } from 'react';

const FAQs: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');

  const faqs = [
    {
      question: "Will the attendance be provided?",
      answer: "Yes! All the participants & Audience will be provided with proper attendance.",
    },
    {
      question: "Do students have to assemble near the event venues?",
      answer: "NO! Escort Team will call you from your respective departments, till then no one is allowed outside.",
    },
    {
      question: "How to Register for events?",
      answer: "You can either register near the stalls or through the website.",
    },
    {
      question: "Can students participate in multiple events?",
      answer: "Yes, they can!! But make sure that events don't clash with each other. In case if they do don't worry we'll be escorting you accordingly.",
    },
    {
      question: "Where can I get to know about the event details?",
      answer: "Click on Explore More.",
    },
    {
      question: "Whom can I contact for queries?",
      answer: "+91 70758 02770 [Aditya]. For more details visit the Contacts Page",
    },
    {
      question: "Can we form our own teams, or will we be allotted to a particular team?",
      answer: "Participants are free to form their own teams. However, you must form your team before registration.",
    },
    {
      question: "How can I  cancel my registration?",
      answer: "Once registered you can't cancel your registration i.e No Money is given Back.",
    },
  ];

  const filterFAQs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value.toLowerCase());
  };

  const toggleFAQ = (index: number) => {
    const answerDiv = document.getElementById(`faq-answer-${index}`);
    if (answerDiv) {
      answerDiv.classList.toggle('hidden');
    }
  };

  const highlightText = (text: string, filter: string): JSX.Element => {
    if (!filter) return <span>{text}</span>;
    const parts = text.split(new RegExp(`(${filter})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === filter ? (
            <span key={index} className="highlight">
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-7 bg-black rounded shadow">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl text-white font-bold mb-4 sm:mb-0">Frequently Asked Questions</h1>
        <input
          type="text"
          id="searchInput"
          onChange={filterFAQs}
          placeholder="Search FAQs"
          className="w-full text-white sm:w-1/3 p-2 mb-4 sm:mb-0 border rounded-full bg-zinc-800"
        />
      </div>
      <ul id="faqList">
        {faqs
          .filter(faq => faq.question.toLowerCase().includes(searchInput) || faq.answer.toLowerCase().includes(searchInput))
          .map((faq, index) => (
            <li key={index} className="mb-4">
              <button
                className="w-full text-white text-left p-4 bg-zinc-800 rounded-t-2xl shadow hover:bg-gray-200 hover:text-black"
                onClick={() => toggleFAQ(index)}
              >
                {index + 1}. {highlightText(faq.question, searchInput)}
              </button>
              <div id={`faq-answer-${index}`} className="p-4 bg-white border rounded-b-2xl shadow-inner hidden">
                {highlightText(faq.answer, searchInput)}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FAQs;
