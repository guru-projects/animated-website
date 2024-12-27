import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin('ScrollTrigger')
const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=500 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })
  return (
    <section id="about" className="relative min-h-screen w-screen">
      <div className="relative mb-8 mt-32 flex items-center flex-col">
        <h2 className="font-general text-sm md:text-[10px] uppercase mb-8">
          Welcome to Zentry
        </h2>

        <AnimatedTitle title="Disc<b>o</b>ver the world's <br />
          largest shared <b>a</b>dventure" containerClass='!text-black'/>
        {/* <div className="font-zentry text-center special-font text-4xl md:text-[5.5rem] leading-[0.9] uppercase ">
          Disc<b>o</b>ver the world's <br />
          largest shared <b>a</b>dventure
        </div> */}
        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p>
            Zentry unites the every players from countless games and platforms,
            both digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div id="clip" className="w-screen min-h-screen">
        <div className="mask-clip-path about-image">
          <img
            src="../../public/img/about.webp"
            alt="background"
            className="absolute top-0 left-0 size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
