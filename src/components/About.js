import React from "react";
import FadeIn from 'react-fade-in';
import { AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export default function About() {
    return (
        <section id="about">
        <FadeIn>
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"> 
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                About Me
                <br className="hidden lg:inline-block" /> 
              </h1>
              <p className="mb-8 leading-relaxed">
              I'm a Computer Systems Engineer from Guadalajara, Mexico. 
              My experience in software development ranges from automotive systems to automation tools and chatbots.
              I am currently sharpening my skills to steer my career path towards front-end development.
              </p>
              <p className="inline-flex items-center p-2"><AiOutlineMail/>&nbsp;david.pd2690@gmail.com</p>
              <p className="inline-flex items-center p-2"><AiOutlinePhone/>&nbsp;+52 331 799 9208</p>
              <div className="flex-col items-center p-2">
                <a 
                  href="https://www.linkedin.com/in/david-perez-daher/" target="_blank"
                  className="inline-flex text-white bg-blue-500 border-0 p-2 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  <AiOutlineLinkedin/>
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded shadow-lg"
                alt=""
                src="./profilepic.jpg"
              />
            </div>
          </div>
          </FadeIn>
        </section>
    );
}