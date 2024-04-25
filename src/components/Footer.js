import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#FAEBD7] text-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Beyond the Horizon. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center items-center mt-2">
          <p className="text-center">
            A Journey through the Solar System and Eclipse Phenomena
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
