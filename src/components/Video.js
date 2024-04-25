import React from "react";
import Navbar from "./Navbar";

const Video = () => {
  const active = "video";

  // Array of video data
  const videoData = [
    {
      link: "https://www.youtube.com/embed/libKVRa01L8",
      heading: "Solar System",

      description:
        "The solar system is a vast and intricate celestial system that comprises the Sun and all the objects bound to it by gravity, including planets, moons, asteroids, comets, and other debris. At its center lies the Sun, a luminous sphere of hot plasma that provides light and heat to the entire system. Orbiting the Sun are eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. These planets vary widely in size, composition, and characteristics.\n\nThe inner planets—Mercury, Venus, Earth, and Mars—are rocky and dense, with solid surfaces and relatively thin atmospheres. They are also known as terrestrial planets. In contrast, the outer planets—Jupiter, Saturn, Uranus, and Neptune—are gas giants composed primarily of hydrogen and helium, with thick atmospheres and no solid surfaces. Additionally, the solar system includes dwarf planets such as Pluto, numerous moons orbiting the planets, as well as asteroids and comets that populate the space between the planets.",
    },
    {
      link: "https://www.youtube.com/embed/UHK-fbdbwF8",
      heading: "Comets",
      description:
        "Comets are celestial bodies composed of ice, dust, rocky debris, and organic compounds that orbit the Sun in highly elongated trajectories. They are often described as 'dirty snowballs' or 'icy dirtballs' due to their icy composition mixed with various other materials. Comets typically originate from two main regions of the solar system: the Kuiper Belt and the Oort Cloud.\n\nWhen a comet approaches the Sun, its ice begins to vaporize, releasing gas and dust that form a glowing coma (a cloud of gas and dust surrounding the comet's nucleus) and often a pair of tails—a dust tail and an ion tail—that point away from the Sun due to the solar wind.\n\nComets have fascinated humans for centuries, often being seen as omens or portents in various cultures. They are important objects of study for astronomers as they provide valuable insights into the early solar system's composition and dynamics. Additionally, studying comets can help scientists understand the processes that led to the formation of planets and other celestial bodies.",
    },
    {
      link: "https://www.youtube.com/embed/cxrLRbkOwKs",
      heading: "Eclipses",
      description:
        "An eclipse occurs when one celestial body moves into the shadow cast by another celestial body, resulting in a temporary dimming or obscuring of light. On Earth, there are two main types of eclipses: solar eclipses and lunar eclipses.\n\nSolar Eclipse: A solar eclipse happens when the Moon passes between the Sun and Earth, blocking all or part of the Sun's light. This can result in a partial or total eclipse, depending on the alignment of the Sun, Moon, and Earth. During a total solar eclipse, the Sun is completely obscured by the Moon, revealing the Sun's outer atmosphere, known as the corona.\n\nLunar Eclipse: A lunar eclipse occurs when Earth passes between the Sun and the Moon, causing Earth's shadow to fall on the Moon. This can result in a partial or total eclipse of the Moon. During a total lunar eclipse, the Moon can appear reddish-orange, earning it the nickname 'blood moon,' due to sunlight refracted by Earth's atmosphere.",
    },

    // Add more video data objects as needed
  ];

  return (
    <>
      <Navbar active={active} />
      <div className="bg-[url('https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D')] text-[#FAEBD7] flex h-[100%] flex-col gap-[5rem] font-extrabold bg-fixed ">
        <div className="flex flex-col m-[5rem]">
          {videoData.map((video, index) => (
            <div key={index} className="flex h-[30rem] my-2 border-2 rounded-xl">
              <div className="">
                <iframe
                  className="h-[30rem] w-[45rem]"
                  src={video.link}
                  title={video.heading}
                  frameBorder="0"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="bg-[#faebd7] w-full  flex flex-col ">
                <div className="text-black text-3xl p-2">{video.heading}</div>
                <div className="text-black p-2">{video.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Video;
