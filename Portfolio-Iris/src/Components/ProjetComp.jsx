import React, { useEffect } from 'react';
import { FileText } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Realisation() {

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  const missions = [
    {
      title: 'Client léger',
      technologies: 'HTML, CSS, JavaScript, React, Node.js, MySQL, Firebase',
      description:
        "Application web moderne développée avec React et Node.js permettant la gestion d'utilisateurs et de données avec Firebase et MySQL.",
      github: 'https://github.com/xSEALVER/Client-leger',
    },
    {
      title: 'Client lourd',
      technologies: 'Java, SQL, JavaFX',
      description:
        "Application desktop développée en Java permettant la gestion complète des données avec une interface graphique interactive.",
      github: 'https://github.com/xSEALVER/Client-lourd',
    },
  ];

  return (
    <section className="py-20 flex justify-center bg-gray-900 min-h-screen">
      <div
        className="w-full max-w-7xl px-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-violet-600 text-center mb-16">
          Projets
        </h1>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {missions.map((mission, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 min-h-[320px] flex flex-col justify-between"
            >

              {/* CONTENT */}
              <div>
                {/* TITLE */}
                <h2 className="text-2xl font-semibold text-violet-600 mb-4">
                  {mission.title}
                </h2>

                {/* TECHNOLOGIES */}
                <p className="text-gray-400 text-base mb-4">
                  <strong>Technologies : </strong>
                  <span className="text-violet-600">
                    {mission.technologies}
                  </span>
                </p>

                {/* DESCRIPTION */}
                <p className="text-white text-base leading-relaxed">
                  {mission.description}
                </p>
              </div>

              {/* BUTTON */}
              <a
                href={mission.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 bg-violet-600 hover:bg-violet-700 text-white text-base font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg w-fit"
              >
                <FileText size={20} />
                Voir Documentation
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}