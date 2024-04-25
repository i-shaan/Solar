import React, { useState } from 'react';

const FAQs = () => {
  const faqsData = [
    {
      question: 'What is the solar system?',
      answer:
        'The solar system consists of the Sun and the objects that orbit it, including planets, moons, asteroids, comets, and more.',
    },
    {
      question: 'How many planets are there in the solar system?',
      answer: 'There are eight planets in the solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.',
    },
    {
      question: 'What is the largest planet in the solar system?',
      answer: 'Jupiter is the largest planet in the solar system.',
    },
    {
      question: 'What is a solar eclipse?',
      answer: 'A solar eclipse occurs when the Moon passes between the Earth and the Sun, blocking all or part of the Sun.',
    },
    // Add more FAQs here
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
    <div className='text-5xl font-semibold text-[#faebd7] flex justify-center py-6 font-serif'>
            Frequently Asked Questions
        </div>
    <div className="max-w-lg mx-auto">
     
      {faqsData.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full bg-gray-200 py-2 px-4 rounded-lg focus:outline-none"
          >
            <span className="text-lg">{faq.question}</span>
            <svg
              className={`w-6 h-6 ${activeIndex === index ? 'transform rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {activeIndex === index && (
            <div className="mt-2 bg-gray-100 p-4 rounded-lg">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default FAQs;
