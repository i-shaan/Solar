import React, { useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import { IoOpenOutline } from "react-icons/io5";
import {useNavigate } from "react-router-dom"
const Intro = () => {
    const planets = [
        {
          name: 'Sun',
          image: 'sun.jpg',
          desc:
            'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process.',
        },
        {
          name: 'Mercury',
          image: 'mercury.jpg',
          desc:
            'Mercury is the smallest planet in the Solar System and the closest to the Sun. It is named after the Roman deity Mercury, the messenger of the gods.',
        },
        {
          name: 'Venus',
          image: 'venus.jpg',
          desc:
            'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. Venus is sometimes called the "morning star" or the "evening star" when it appears in the sky just before sunrise or sunset.',
        },
        {
          name: 'Earth',
          image: 'earth.jpg',
          desc:
            'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth\'s surface is land consisting of continents and islands.',
        },
        {
          name: 'Mars',
          image: 'mars.jpg',
          desc:
            'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, after Mercury. Mars is often referred to as the "Red Planet" due to its reddish appearance.',
        },
        {
          name: 'Jupiter',
          image: 'jupiter.jpg',
          desc:
            'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined.',
        },
        {
          name: 'Saturn',
          image: 'saturn.jpg',
          desc:
            'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth.',
        },
        {
          name: 'Uranus',
          image: 'uranus.jpg',
          desc:
            'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
        },
        {
          name: 'Neptune',
          image: 'neptune.jpg',
          desc:
            'Neptune is the eighth and farthest known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.',
        },
        {
            name: 'Moon',
            image: 'moon.jpg',
            desc:
              'The Moon is Earth\'s only natural satellite. It is one of the largest natural satellites in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits.',
          },
        
    ];
    
    const [isFlipped, setIsFlipped] = useState(Array(planets.length).fill(false));
   const navigate = useNavigate();
    const handleClick = (index) => {

        const newFlippedState = [...isFlipped];

        newFlippedState[index] = !newFlippedState[index];

        setIsFlipped(newFlippedState);
    };
    const handleInfo = (planet) => {
        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            console.log(planet);
            navigate(`/planet/${planet}`);
        } else {
            alert("You need to be logged in order to access this section");
            navigate('/login');
        }
    };


    return (
        <>
        <div className='py-4'>

        
        <div className='text-5xl font-semibold text-[#faebd7] flex justify-center py-6 font-serif'>
            Overview
        </div>
        <div className="flex justify-center items-center h-full py-2">

        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {planets.map((planet, index) => (
                <div key={index} className="w-fit mx-auto ">
                    <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="vertical">
                        {/* Front Side */}
                        <div
                            className="h-[15rem] border-[#faebd7] border-2  w-[15rem] bg-[#ADD8E6] flex flex-col   rounded-2xl relative cursor-pointer"
                            onClick={() => handleClick(index)}
                        >
                            <img
                                className="absolute bottom-0 h-[60%] w-full object-cover object-top rounded-b-2xl "
                                src={planet.image}
                                alt={planet.name}
                            />
                            <div className='flex p-2 text-2xl text-pink-500  font-semibold text-center mt-[10%] justify-between '>

                        
                             <IoOpenOutline onClick={()=>handleInfo(planet.name)} className='text-black'></IoOpenOutline>
                            <h1 className="  tracking-widest ">{planet.name}</h1>
                            </div>
                        </div>
                        {/* Back Side */}
                        <div className="h-[15rem] border-pink-500 w-[15rem] bg-[#faebd7] flex flex-col justify-center items-center mx-auto border-2 rounded-2xl" onClick={() => handleClick(index)}>
                            <div className="p-2 font-extralight">
                                <p>{planet.desc}</p>
                            </div>
                        </div>
                    </ReactCardFlip>
                </div>
            ))}
        </div>
        </div>
        </div>
        </>
    );
};

export default Intro;
