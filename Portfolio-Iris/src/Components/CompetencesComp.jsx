import React from 'react'

const CompetencesComp = () => {
  return (
    <section className="py-16 flex justify-center bg-gray-900">

      <div className="w-full max-w-4xl">

        {/* TITRE PRINCIPAL */}
        <div className="text-center mb-14">
          <h1
            data-aos="fade-down"
            className="font-bold text-3xl text-violet-600"
          >
            Compétences
          </h1>
        </div>

        {/* COMPÉTENCES */}
        <div
          className="flex flex-col gap-14 items-center"
          data-aos="fade-up"
        >
          {/* LANGAGES */}
          <div className="w-full text-center">
            <h2 className="text-2xl font-semibold text-violet-500 mb-6">
              Langages
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['HTML', 'CSS', 'JavaScript', 'PHP'].map((skill) => (
                <span
                  key={skill}
                  className="bg-violet-600 text-white px-6 py-2 rounded-2xl text-base"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* FRAMEWORKS */}
          <div className="w-full text-center">
            <h2 className="text-2xl font-semibold text-violet-500 mb-6">
              Frameworks
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React',
                'NodeJS',
                'ExpressJS',
                'Symfony',
                'Bootstrap',
                'Tailwind',
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-violet-600 text-white px-6 py-2 rounded-2xl text-base"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* BASES DE DONNÉES */}
          <div className="w-full text-center">
            <h2 className="text-2xl font-semibold text-violet-500 mb-6">
              Bases de données
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['MySQL', 'Firebase'].map((skill) => (
                <span
                  key={skill}
                  className="bg-violet-600 text-white px-6 py-2 rounded-2xl text-base"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CERTIFICATION */}
        <div
          className="mt-24 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-violet-600 mb-8">
            Certification
          </h2>

          <div className="bg-white rounded-3xl shadow-lg p-8 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              SecNumAcadémie – ANSSI
            </h3>

            <p className="text-gray-500 mb-6">
              Certification officielle de sensibilisation à la cybersécurité
              délivrée par l’ANSSI.
            </p>

            <a
              href="/certificat-anssi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition"
            >
              Voir le certificat
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CompetencesComp
