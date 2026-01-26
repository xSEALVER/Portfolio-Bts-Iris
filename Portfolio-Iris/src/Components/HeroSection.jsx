// import React from 'react';
// import Typical from 'react-typical';
// import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

// const HeroSection = () => {
//   return (
//     <div className="h-screen bg-gray-900 text-white flex items-center">
//       <div className="ml-16">
//         {/* Name tag */}
//         <div className="mb-4">
//           <span className="bg-yellow-500 text-black px-4 py-2 rounded-full">Eric Miezan</span>
//         </div>

//         {/* Typing effect */}
//         <h1 className="text-5xl font-bold mb-4">
//           Je suis{' '}
//           <Typical
//             steps={['Dév Web', 4000, 'Frontend Dev', 4000, 'UI/UX Designer', 4000]}
//             loop={Infinity}
//             wrapper="span"
//             className="text-purple-600"
//           />
//         </h1>

//         {/* Subtitle */}
//         <p className="text-gray-400 mb-8">
//           Experienced frontend developer with a passion for creating visually stunning and user-friendly websites.
//         </p>

//         {/* Buttons */}
//         <div className="flex space-x-4 mb-12">
//           <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full">
//             M'embaucher
//           </button>
//           <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full flex items-center">
//             télécharger mon CV <span className="ml-2">📄</span>
//           </button>
//         </div>

//         {/* Social Icons */}
//         <div className="flex space-x-6 text-gray-400">
//           <FaInstagram className="hover:text-white" size={30} />
//           <FaLinkedin className="hover:text-white" size={30} />
//           <FaGithub className="hover:text-white" size={30} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="h-screen bg-gray-900 text-white flex items-center">
      <div className="ml-16">
        {/* Name tag */}
        <div className="mb-4" data-aos="fade-down">
          <span className="bg-yellow-500 text-black px-4 py-2 rounded-full">
            Eric Miezan
          </span>
        </div>

        {/* Typing effect */}
        <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">
          Je suis{" "}
          <TypeAnimation
            sequence={["Etudiant en BTS SIO", 1000]}
            speed={200} // Typing speed
            deletionSpeed={200} // Slower erasing speed
            wrapper="span"
            repeat={Infinity}
            className="text-purple-500"
          />
        </h1>

        {/* Subtitle */}
        <p className="text-white mb-8 w-[450px]" data-aos="fade-up">
          Je maîtrise parfaitement HTML, CSS et JavaScript, ainsi que d'autres
          frameworks et bibliothèques de pointe, ce qui me permet de développer
          des fonctionnalités interactives. 
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mb-12">
          {/* <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full" data-aos="fade-left">
            M'embaucher
          </button> */}
          <a
            href="CV_Eric.pdf"
            download="CV-Miezan-Eric.pdf"
            className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full flex items-center "
            data-aos="fade-right"
          >
            télécharger mon CV <span className="ml-2 text-black">📄</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-400">
          {/* Lien vers Instagram */}
          <a
            href="https://www.instagram.com/ericmiezan/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
          >
            <FaInstagram
              className="hover:text-white cursor-pointer"
              size={30}
            />
          </a>

          {/* Lien vers LinkedIn */}
          <a
            href="https://www.linkedin.com/in/eric-miezan-2b6106292/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaLinkedin className="hover:text-white cursor-pointer" size={30} />
          </a>

          {/* Lien vers GitHub */}
          <a
            href="https://github.com/xSEALVER"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <FaGithub className="hover:text-white cursor-pointer" size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
