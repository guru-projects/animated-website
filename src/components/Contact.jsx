import React from "react";
import Button from "./Button";

const ImageClipBox = ({ src, clipContainer }) => (
  <div className={clipContainer}>
    <img src={src} alt="clip" />
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="bg-black relative rounded-lg py-24 md:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="../../public/img/contact-1.webp"
            clipContainer="contact-clip-path-1"
          />
          <ImageClipBox
            src="../../public/img/contact-2.webp"
            clipContainer="contact-clip-path-1 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="../../public/img/swordman-partial.webp"
            clipContainer="absolute md:scale-125"
          />
          <ImageClipBox
            src="../../public/img/swordman.webp"
            clipContainer="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-blue-50 text-[10px] uppercase">Join Zentry</p>
          <p className="text-blue-50 special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">let’s buil<b>d</b> the <br /><b>n</b>ew era <b>o</b>f <br /> ga<b>m</b>ing t<b>o</b>gether.</p>
          <Button title="contact us" containerClass="!text-black mt-10" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
