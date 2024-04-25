// Earth.js
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';


const Earth = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col gap-2 bg-[url("https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D")]'>
                <div className="container mx-auto flex p-4">
                    <div className="w-1/2 pr-4 flex flex-col gap-2">
                        <img src={process.env.PUBLIC_URL + '/earth.jpg'}alt="Earth" className="rounded-lg shadow-lg" />
                        <img src={process.env.PUBLIC_URL + '/earth_atmo.jpeg'}alt="Earth" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-1/2 bg-slate-300 p-4">
                        <h2 className="text-3xl font-bold mb-4">Earth</h2>
                        <p>
                            Earth is the third planet from the Sun and the only known planet to support life. It has a
                            diverse range of ecosystems and is home to millions of species of plants, animals, and
                            microorganisms.
                        </p>
                        <p>
                            Earth's atmosphere is composed primarily of nitrogen (78%) and oxygen (21%), with trace amounts
                            of other gases. The atmosphere helps to regulate temperature and protect life on Earth from
                            harmful solar radiation.
                        </p>
                        <p>
                            Earth has one natural satellite, the Moon, which plays a significant role in shaping its
                            tides and stabilizing its axial tilt.
                        </p>
                        <h3 className="text-3xl font-bold my-4 ">The Atmoshpere</h3>
                        <p>
                        Earth's atmosphere stretches from the surface of the planet up to as far as 10,000 kilometers (6,214 miles) above. After that, the atmosphere blends into space. Not all scientists agree where the actual upper boundary of the atmosphere is, but they can agree that the bulk of the atmosphere is located close to Earth's surface—up to a distance of around eight to 15 kilometers (five to nine miles).

While oxygen is necessary for most life on Earth, the majority of Earth's atmosphere is not oxygen. Earth's atmosphere is composed of about 78 percent nitrogen, 21 percent oxygen, 0.9 percent argon, and 0.1 percent other gases. Trace amounts of carbon dioxide, methane, water vapor, and neon are some of the other gases that make up the remaining 0.1 percent.

The atmosphere is divided into five different layers, based on temperature. The layer closest to Earth's surface is the troposphere, reaching from about seven and 15 kilometers (five to 10 miles) from the surface. The troposphere is thickest at the equator, and much thinner at the North and South Poles. The majority of the mass of the entire atmosphere is contained in the troposphere—between approximately 75 and 80 percent. Most of the water vapor in the atmosphere, along with dust and ash particles, are found in the troposphere—explaining why most of Earth's clouds are located in this layer. Temperatures in the troposphere decrease with altitude.

The stratosphere is the next layer up from Earth's surface. It reaches from the top of the troposphere, which is called the tropopause, to an altitude of approximately 50 kilometers (30 miles). Temperatures in the stratosphere increase with altitude. A high concentration of ozone, a molecule composed of three atoms of oxygen, makes up the ozone layer of the stratosphere. This ozone absorbs some of the incoming solar radiation, shielding life on Earth from potentially harmful ultraviolet (UV) light, and is responsible for the temperature increase in altitude.

The top of the stratosphere is called the stratopause. Above that is the mesosphere, which reaches as far as about 85 kilometers (53 miles) above Earth's surface. Temperatures decrease in the mesosphere with altitude. In fact, the coldest temperatures in the atmosphere are near the top of the mesosphere—about -90°C (-130°F). The atmosphere is thin here, but still thick enough so that meteors will burn up as they pass through the mesosphere—creating what we see as “shooting stars.” The upper boundary of the mesosphere is called the mesopause.

The thermosphere is located above the mesopause and reaches out to around 600 kilometers (372 miles). Not much is known about the thermosphere except that temperatures increase with altitude. Solar radiation makes the upper regions of the thermosphere very hot, reaching temperatures as high as 2,000°C (3,600°F).

The uppermost layer, that blends with what is considered to be outer space, is the exosphere. The pull of Earth's gravity is so small here that molecules of gas escape into outer space.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Earth;
