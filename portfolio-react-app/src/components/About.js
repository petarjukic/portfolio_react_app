import React from "react";


const About = () => {
    return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Petar.
          </h1>
          <p className="mb-8 leading-relaxed">
            Android Developer with 3 and half years experience. I'm currently learning React, and this portfolio app is one of my React projects.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/petar-jukić-6580a1230/?originalSubdomain=hr"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Linkedin profile
            </a>
            <a
              href="https://github.com/petarjukic"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work (GitHub)
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded h-48 w-92"
            alt="codingIcon"
            src="https://cdn2.iconfinder.com/data/icons/coding-and-development-flat/60/Male-Developer-programming-man-coder-512.png"
          />
        </div>
      </div>
    </section>
    );
}

export default About;