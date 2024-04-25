
// Sun.js
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';


const Sun = () => {
    return (
        <>
        <Navbar/>
        <div className='flex flex-col gap-2 bg-[url("https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D")]'>
        <div className="container mx-auto flex p-4">
            <div className="w-1/2 pr-4">
                <img src={process.env.PUBLIC_URL + '/sun.jpg'} alt="Sun" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-1/2 bg-slate-300 p-4">
                <h2 className="text-3xl font-bold mb-4">The Sun</h2>
                <p>
                    The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma,
                    with internal convective motion that generates a magnetic field via a dynamo process.
                </p>
                <p>
                    Its diameter is about 1.39 million kilometers (864,000 miles), or 109 times that of Earth, and its
                    mass is about 330,000 times that of Earth. It accounts for about 99.86% of the total mass of the
                    Solar System.
                </p>
                <h2 className="text-2xl font-bold my-2">Physical properties</h2>
                <p>
                The radius of the Sun, R☉, is 109 times that of Earth, but its distance from Earth is 215 R☉, so it subtends an angle of only 1/2° in the sky, roughly the same as that of the Moon. By comparison, Proxima Centauri, the next closest star to Earth, is 250,000 times farther away, and its relative apparent brightness is reduced by the square of that ratio, or 62 billion times. The temperature of the Sun’s surface is so high that no solid or liquid can exist there; the constituent materials are predominantly gaseous atoms, with a very small number of molecules. As a result, there is no fixed surface. The surface viewed from Earth, called the photosphere, is the layer from which most of the radiation reaches us; the radiation from below is absorbed and reradiated, and the emission from overlying layers drops sharply, by about a factor of six every 200 kilometres (124 miles). The Sun is so far from Earth that this slightly fuzzy surface cannot be resolved, and so the limb (the visible edge) appears sharp.
                </p>
            </div>
        </div>
                <div className="container mx-auto flex p-4">
                <div className="w-1/2 pr-4">
                    <img src={process.env.PUBLIC_URL + '/solar_eclipse.jpg'} alt="Solar Eclipse" className="rounded-lg shadow-lg" />
                </div>
                <div className="w-1/2 bg-slate-300 p-4">
                    <h2 className="text-3xl font-bold mb-4">Solar Eclipse</h2>
                    <p>
                        A solar eclipse occurs when a portion of the Earth is engulfed in a shadow cast by the Moon which
                        fully or partially blocks sunlight. This occurs when the Sun, Moon, and Earth are aligned. Such
                        alignment coincides with a new moon (syzygy) indicating the Moon is closest to the ecliptic plane.
                    </p>
                    <p>
                        In a total eclipse, the disk of the Sun is fully obscured by the Moon. In partial and annular
                        eclipses, only part of the Sun is obscured.
                    </p>
                </div>
            </div>
            </div>
            <Footer/>
            </>
    );
};

export default Sun;
