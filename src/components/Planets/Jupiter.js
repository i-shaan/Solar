// Jupiter.js
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';


const Jupiter = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col gap-2 bg-[url("https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D")]'>
                <div className="container mx-auto flex p-4">
                    <div className="w-1/2 pr-4">
                        <img src={process.env.PUBLIC_URL + '/jupiter.jpg'} alt="Jupiter" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-1/2 bg-slate-300 p-4">
                        <h2 className="text-3xl font-bold mb-4">Jupiter</h2>
                        <p>
                            Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant
                            with a mass one-thousandth that of the Sun, but two and a half times that of all the other
                            planets in the Solar System combined.
                        </p>
                        <p>
                            Jupiter's atmosphere is primarily composed of hydrogen and helium, with trace amounts of other
                            gases. It has a distinctive banded appearance due to its powerful jet streams and atmospheric
                            dynamics.
                        </p>
                        <p>
                            Jupiter has a strong magnetic field and a system of faint rings. It is known for its Great Red
                            Spot, a persistent anticyclonic storm that is larger than Earth.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Jupiter;
