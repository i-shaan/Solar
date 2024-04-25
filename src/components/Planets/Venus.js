// Venus.js
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';


const Venus = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col gap-2 bg-[url("https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D")]'>
                <div className="container mx-auto flex p-4">
                    <div className="w-1/2 pr-4">
                        <img src={process.env.PUBLIC_URL + '/venus.jpg'}alt="Venus" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-1/2 bg-slate-300 p-4">
                        <h2 className="text-3xl font-bold mb-4">Venus</h2>
                        <p>
                            Venus is the second planet from the Sun and is often referred to as Earth's "sister planet"
                            because of their similar size and composition.
                        </p>
                        <p>
                            Venus has a thick atmosphere composed mainly of carbon dioxide, with clouds of sulfuric acid
                            droplets. This dense atmosphere traps heat, making Venus the hottest planet in the Solar System
                            with surface temperatures hot enough to melt lead.
                        </p>
                        <p>
                            Venus rotates very slowly on its axis and in the opposite direction to most planets, a phenomenon
                            known as retrograde rotation.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Venus;
