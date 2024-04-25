// Uranus.js
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';


const Uranus = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col gap-2 bg-[url("https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D")]'>
                <div className="container mx-auto flex p-4">
                    <div className="w-1/2 pr-4">
                        <img src={process.env.PUBLIC_URL + '/uranus.jpg'} alt="Uranus" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-1/2 bg-slate-300 p-4">
                        <h2 className="text-3xl font-bold mb-4">Uranus</h2>
                        <p>
                            Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and
                            fourth-largest planetary mass in the Solar System.
                        </p>
                        <p>
                            Uranus has a predominantly hydrogen–helium atmosphere and is the coldest planetary atmosphere
                            in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F).
                        </p>
                        <p>
                            Uranus is unique among the planets in that it rotates on its side, with its axis of rotation
                            tilted sideways compared to other planets. This gives it extreme seasons, with each pole
                            experiencing 42 years of continuous sunlight followed by 42 years of darkness.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Uranus;
