// Saturn.js
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';


const Saturn = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col gap-2 bg-[url("https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D")]'>
                <div className="container mx-auto flex p-4">
                    <div className="w-1/2 pr-4">
                        <img src={process.env.PUBLIC_URL + '/saturn.jpg'} alt="Saturn" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-1/2 bg-slate-300 p-4">
                        <h2 className="text-3xl font-bold mb-4">Saturn</h2>
                        <p>
                            Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after
                            Jupiter. It is a gas giant with an average radius of about nine times that of Earth.
                        </p>
                        <p>
                            Saturn's atmosphere is primarily composed of hydrogen and helium, with trace amounts of other
                            gases. It has a unique feature known as its ring system, which is composed of ice particles,
                            rock, and dust.
                        </p>
                        <p>
                            Saturn has 82 known moons, the largest of which is Titan. Titan is notable for its thick
                            atmosphere and hydrocarbon lakes.
                        </p>
                        <h1 className='text-3xl font-bold my-4'>Physical Properties</h1>
                        <p>

Astronomers on Earth have analyzed the refraction (bending) of starlight and radio waves from spacecraft passing through Saturn’s atmosphere to gain information on atmospheric temperature over depths corresponding to pressures of one-millionth of a bar to 1.3 bars. At pressures less than 1 millibar, the temperature is roughly constant at about 140 to 150 kelvins (K; −208 to −190 °F, −133 to −123 °C). A stratosphere, where temperatures steadily decline with increasing pressure, extends downward from 1 to 60 millibars, at which level the coldest temperature in Saturn’s atmosphere, 82 K (−312 °F, −191 °C), is reached. At higher pressures (deeper levels) the temperature increases once again. This region is analogous to the lowest layer of Earth’s atmosphere, the troposphere, in which the increase of temperature with pressure follows the thermodynamic relation for compression of a gas without gain or loss of heat. The temperature is 135 K (−217 °F, −138 °C) at a pressure of 1 bar, and it continues to increase at higher pressures.

Saturn’s visible layer of clouds is formed from molecules of minor compounds that condense in the hydrogen-rich atmosphere. Although particles formed from photochemical reactions are seen suspended high in the atmosphere at levels corresponding to pressures of 20–70 millibars, the main clouds commence at a level where the pressure exceeds 400 millibars, with the highest cloud deck thought to be formed of solid ammonia crystals. The base of the ammonia cloud deck is predicted to occur at a depth corresponding to about 1.7 bars, where the ammonia crystals dissolve into the hydrogen gas and disappear abruptly. Nearly all information about deeper cloud layers has been obtained indirectly by constructing chemical models of the behaviour of compounds expected to be present in a gas of near solar composition following the temperature-pressure profile of Saturn’s atmosphere. The bases of successively deeper cloud layers occur at 4.7 bars (ammonium hydrosulfide crystals) and at 10.9 bars (water ice crystals with aqueous ammonia droplets). Although all the clouds mentioned above would be colourless in the pure state, the actual clouds of Saturn display various shades of yellow, brown, and red. These colours are apparently produced by chemical impurities, perhaps as the photochemical products rain down on the clouds from above. Phosphorus-containing molecules are also candidate colorants.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Saturn;
