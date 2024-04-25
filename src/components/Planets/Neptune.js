// Neptune.js
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';


const Neptune = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col gap-2 bg-[url("https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D")]'>
                <div className="container mx-auto flex p-4">
                    <div className="w-1/2 pr-4">
                        <img src={process.env.PUBLIC_URL + '/neptune.jpg'} alt="Neptune" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-1/2 bg-slate-300 p-4">
                        <h2 className="text-3xl font-bold mb-4">Neptune</h2>
                        <p>
                            Neptune is the eighth and farthest known planet from the Sun in the Solar System. It is a gas
                            giant and has the third-largest planetary radius and fourth-largest planetary mass in the Solar
                            System.
                        </p>
                        <p>
                            Neptune's atmosphere is primarily composed of hydrogen and helium, with trace amounts of other
                            gases such as methane. The presence of methane gives Neptune its blue coloration.
                        </p>
                        <p>
                            Neptune has a system of faint rings and 14 known moons. Its largest moon, Triton, is unusual
                            because it orbits Neptune in a retrograde direction, opposite to the planet's rotation.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Neptune;
