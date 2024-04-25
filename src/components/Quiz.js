import React, { useState } from 'react';
import Navbar from './Navbar';

const questions = [
  { question: "What is the largest planet in the solar system?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Jupiter" },
  { question: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
  { question: "What is the hottest planet in the solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Venus" },
  { question: "Which planet is known as the 'Red Planet'?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mars" },
  { question: "What is the smallest planet in the solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
  { question: "What is the largest moon in the solar system?", options: ["Titan", "Ganymede", "Io", "Europa"], answer: "Ganymede" },
  { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Jupiter" },
  { question: "What is the name of the spacecraft that visited Pluto in 2015?", options: ["New Horizons", "Voyager", "Cassini", "Galileo"], answer: "New Horizons" },
  { question: "Which planet is famous for its beautiful rings?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
  { question: "What is the largest moon of Saturn?", options: ["Titan", "Enceladus", "Rhea", "Mimas"], answer: "Titan" },
  { question: "What is a solar eclipse?", options: ["When the Moon passes between the Earth and the Sun, blocking the Sun's light", "When the Earth passes between the Moon and the Sun, blocking the Moon's light", "When the Earth casts its shadow on the Moon", "When the Moon casts its shadow on the Earth"], answer: "When the Moon passes between the Earth and the Sun, blocking the Sun's light" },
  { question: "What is a lunar eclipse?", options: ["When the Moon passes between the Earth and the Sun, blocking the Sun's light", "When the Earth passes between the Moon and the Sun, blocking the Moon's light", "When the Earth casts its shadow on the Moon", "When the Moon casts its shadow on the Earth"], answer: "When the Earth passes between the Moon and the Sun, blocking the Moon's light" },
  { question: "During a total solar eclipse, what do you see in the sky?", options: ["The Sun with a ring of light around it", "The Moon completely covering the Sun", "The Sun partially covered by the Moon", "The Moon completely covered by the Earth's shadow"], answer: "The Moon completely covering the Sun" },
  { question: "During a total lunar eclipse, what do you see in the sky?", options: ["The Sun with a ring of light around it", "The Moon completely covering the Sun", "The Sun partially covered by the Moon", "The Moon completely covered by the Earth's shadow"], answer: "The Moon completely covered by the Earth's shadow" },
  { question: "What type of eclipse occurs when the Sun, Moon, and Earth align in a straight line?", options: ["Solar eclipse", "Lunar eclipse", "Annular eclipse", "Partial eclipse"], answer: "Solar eclipse" },
 
];

function Quiz() {
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const active="quiz"
    const handleAnswer = () => {
        let newScore = 0;
        questions.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="answer${index}"]:checked`);
            if (selectedOption) {
                const userAnswer = selectedOption.value;
                if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
                    newScore++;
                }
            }
        });
        setScore(newScore);
        setSubmitted(true);
    };

    return (
      <>
      <Navbar active={active}/>
        <div className="bg-[url('https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D')] bg-gray-100 min-h-screen flex justify-center items-center bg-fixed ">
          
            <div id="quiz-container" className=" bg-[#faebd7] p-8 rounded-lg shadow-md my-4 ">
                <h1 className="text-2xl font-bold text-blue-600 mb-4">Solar System Quiz</h1>
                {questions.map((question, index) => (
                    <div key={index} className="question py-2">
                        <p className='font-bold'>{index + 1}. {question.question}</p>
                        {question.options.map((option, optionIndex) => (
                            <label key={optionIndex} className="block">
                                <input type="radio" name={`answer${index}`} value={option} className="mr-2" />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}
                <button onClick={handleAnswer} id="submit-btn" className="bg-blue-600 text-white py-2 px-4 rounded-lg block mt-4">
                    Submit Answers
                </button>
                {submitted && (
                    <div id="result-container" className="text-center font-bold text-blue-600 mt-4">
                        Your score: {score} out of {questions.length}
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default Quiz;
