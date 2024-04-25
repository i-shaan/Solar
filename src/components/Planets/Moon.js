
// Sun.js
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';


const Moon = () => {
    return (
        <>
        <Navbar/>
        <div className='flex flex-col gap-2 bg-[url("https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D")]'>
        <div className="container mx-auto flex p-4">
            <div className="w-1/2 pr-4">
                <img src={process.env.PUBLIC_URL + '/moon.jpg'} alt="Sun" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-1/2 bg-slate-300 p-4">
                <h2 className="text-3xl font-bold mb-4">The Moon</h2>
                <p>
                Moon, Earth's sole natural satellite and nearest large celestial body. Known since prehistoric times, it is the brightest object in the sky after the Sun. It is designated by the symbol ☽. Its name in English, like that of Earth, is of Germanic and Old English derivation.
                </p>
                <p>
                  
                </p>
                <h2 className="text-2xl font-bold my-2">Physical characteristics</h2>
                <p>
                The Moon is a very slightly scalene ellipsoid due to tidal stretching, with its long axis displaced 30° from facing the Earth, due to gravitational anomalies from impact basins. Its shape is more elongated than current tidal forces can account for. This 'fossil bulge' indicates that the Moon solidified when it orbited at half its current distance to the Earth, and that it is now too cold for its shape to restore hydrostatic equilibrium at its current orbital distance.
                </p>
                <p>
                The Moon is by size and mass the fifth largest natural satellite of the Solar System, categorizable as one of its planetary-mass moons, making it a satellite planet under the geophysical definitions of the term. It is smaller than Mercury and considerably larger than the largest dwarf planet of the Solar System, Pluto. While the minor-planet moon Charon of the Pluto-Charon system is larger relative to Pluto, the Moon is the largest natural satellite of the Solar System relative to their primary planets.

The Moon's diameter is about 3,500 km, more than a quarter of Earth's, with the face of the Moon comparable to the width of either Australia, Europe or the US without Alaska. The whole surface area of the Moon is about 38 million square kilometers, between the size of the Americas (North and South America) and Africa.

The Moon's mass is 1/81 of Earth's, being the second densest among the planetary moons, and having the second highest surface gravity, after Io, at 0.1654 g and an escape velocity of 2.38 km/s (8600 km/h; 5300 mph).
                </p>
            </div>
        </div>
                <div className="container mx-auto flex p-4">
                <div className="w-1/2 pr-4">
                    <img src={process.env.PUBLIC_URL + '/lunar_eclipse.jpg'} alt="Solar Eclipse" className="rounded-lg shadow-lg" />
                </div>
                <div className="w-1/2 bg-slate-300 p-4">
                    <h2 className="text-3xl font-bold mb-4">Lunar Eclipse</h2>
                    <p>
                    Lunar eclipses occur at the full moon phase. When Earth is positioned precisely between the Moon and Sun, Earth's shadow falls upon the surface of the Moon, dimming it and sometimes turning the lunar surface a striking red over the course of a few hours. Each lunar eclipse is visible from half of Earth.
                    </p>
                    <p>
                    <h1>Total lunar eclipse</h1>
The Moon moves into the inner part of Earth's shadow, or the umbra. Some of the sunlight passing through Earth's atmosphere reaches the Moon's surface, lighting it dimly. Colors with shorter wavelengths ― the blues and violets ― scatter more easily than colors with longer wavelengths, like red and orange. Because these longer wavelengths make it through Earth’s atmosphere, and the shorter wavelengths have scattered away, the Moon appears orangish or reddish during a lunar eclipse. The more dust or clouds in Earth's atmosphere during the eclipse, the redder the Moon appears.
                    </p>
                </div>
            </div>
            </div>
            <Footer/>
            </>
    );
};

export default Moon;
