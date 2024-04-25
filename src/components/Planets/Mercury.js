// Mercury.js
import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';


const Mercury = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col gap-2 bg-[url("https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D")]'>
                <div className="container mx-auto flex p-4">
                    <div className="w-1/2 pr-4">
                        <img src={process.env.PUBLIC_URL + '/mercury.jpg'} alt="Mercury" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-1/2 bg-slate-300 p-4">
                        <h2 className="text-3xl font-bold mb-4">Mercury</h2>
                        <p>
                            Mercury is the smallest planet in the Solar System and the closest to the Sun. It is named after
                            the Roman deity Mercury, the messenger of the gods.
                        </p>
                        <p>
                            Mercury has a surface temperature that can reach up to 800 degrees Fahrenheit (430 degrees Celsius)
                            during the day and drop to -290 degrees Fahrenheit (-180 degrees Celsius) at night due to its lack
                            of atmosphere to retain heat.
                        </p>
                        <p>
                            Mercury has a heavily cratered surface and no moons. It has a very thin atmosphere composed of
                            small amounts of hydrogen, helium, and oxygen.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Mercury;
