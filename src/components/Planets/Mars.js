// Mars.js
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';


const Mars = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col gap-2 bg-[url("https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D")]'>
                <div className="container mx-auto flex p-4">
                    <div className="w-1/2 pr-4">
                        <img src={process.env.PUBLIC_URL + '/mars.jpg'}  alt="Mars" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-1/2 bg-slate-300 p-4">
                        <h2 className="text-3xl font-bold mb-4">Mars</h2>
                        <p>
                            Mars is the fourth planet from the Sun and the second smallest planet in the Solar System,
                            after Mercury. It is often referred to as the "Red Planet" because of its reddish appearance due
                            to iron oxide prevalent on its surface.
                        </p>
                        <p>
                            Mars has polar ice caps composed primarily of water ice and dry ice. It has a thin atmosphere
                            composed primarily of carbon dioxide. The surface of Mars is covered in red iron oxide dust and
                            rocks, giving it a rusty appearance.
                        </p>
                        <p>
                            Mars has two moons, Phobos and Deimos, which are small and irregularly shaped. They may be
                            captured asteroids or remnants of a larger moon that was shattered long ago.
                        </p>
                        <p>
                            Mars has been explored by several robotic missions, including the Mars rovers Spirit, Opportunity,
                            and Curiosity. Human missions to Mars are a long-term goal of space agencies around the world.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Mars;
