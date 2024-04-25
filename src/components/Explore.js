import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Explore = () => {
    const [planetData, setPlanetData] = useState([]);
    const active="explore";
    useEffect(() => {
        fetchPlanetData();
    }, []);

    const fetchPlanetData = () => {
        fetch('https://api.le-systeme-solaire.net/rest/bodies/')
            .then(response => response.json())
            .then(data => {
                const planets = data.bodies.filter(body => body.isPlanet);
                setPlanetData(planets);
            })
            .catch(error => {
                console.error('Error fetching planet data:', error);
            });
    };

    return (
        <>
        <Navbar active={active}/>
        <div className='bg-[url("https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D")] min-h-screen bg-cover bg-fixed bg-no-repeat bg-center py-8 px-4'>
            <h1 className="text-4xl font-bold text-center mb-8 text-[#faebd7]">Real-time Solar System Data</h1>
            <div className="max-w-3xl mx-auto">
                <div className="grid gap-6">
                    {planetData.map((planet, index) => (
                        <div key={index} className="bg-[#faebd7] bg-opacity-60 rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold text-[#C3CFDC] mb-4">{planet.name}</h2>
                            <p><span className="font-semibold">Semimajor Axis:</span> {planet.semimajorAxis} AU</p>
                            <p><span className="font-semibold">Eccentricity:</span> {planet.eccentricity}</p>
                            <p><span className="font-semibold">Inclination:</span> {planet.inclination}</p>
                            <p><span className="font-semibold">Mean Radius:</span> {planet.meanRadius} km</p>
                            <p><span className="font-semibold">Mass:</span> {planet.mass.massValue} {planet.mass.massExponent} kg</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Explore;
