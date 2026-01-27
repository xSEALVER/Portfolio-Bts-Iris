import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const ParcoursComp = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <section className="py-16 flex justify-center bg-gray-900">
      <div className="w-full max-w-4xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
      >

        {/* TITRE */}
        <div className="text-center mb-16 " data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
          <h1 className="text-3xl font-bold text-violet-600">
            Mon Parcours
          </h1>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l-4 border-violet-500 pl-8 space-y-14"
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
        >

          {/* BAC */}
          <div>
            <span className="absolute -left-3 top-1 w-6 h-6 bg-violet-600 rounded-full"></span>
            <h2 className="text-xl font-semibold text-white">
              2022 – Baccalauréat Général
            </h2>
            <p className="text-white mt-2">
              Lycée Guy de Maupassant – Colombes (92)
            </p>
            <p className="text-white mt-2">
              Spécialités : <strong className='text-violet-600'>Mathématiques</strong> et{' '}
              <strong className='text-violet-600'>Numérique et Sciences Informatiques (NSI)</strong>.
              Découverte de la programmation, de l’algorithmique et du monde du numérique.
            </p>
          </div>

          {/* ANNÉES DE RÉFLEXION */}
          <div >
            <span className="absolute -left-3 w-6 h-6 bg-violet-600 rounded-full"></span>
            <h2 className="text-xl font-semibold text-white">
              2022 – 2024 | Période de réflexion
            </h2>
            <p className="text-white mt-2">
              Après le baccalauréat, j’ai pris le temps de réfléchir à mon orientation.
              Hésitant entre <strong className='text-violet-600'>l’informatique</strong> et <strong className='text-violet-600'>la médecine</strong>,
              cette période m’a permis de confirmer mon intérêt pour les métiers du numérique.
            </p>
          </div>

          {/* BTS 1 */}
          <div>
            <span className="absolute -left-3 w-6 h-6 bg-violet-600 rounded-full"></span>
            <h2 className="text-xl font-semibold text-white">
              2024 – 2025 | BTS SIO – 1ʳᵉ année
            </h2>
            <p className="text-white mt-2">
              Entrée en <strong className='text-violet-600'>BTS Services Informatiques aux Organisations</strong>.
              Acquisition de bases solides en développement web, bases de données,
              programmation et réalisation de projets, ainsi qu’un stage en entreprise.
            </p>
          </div>

          {/* BTS 2 */}
          <div>
            <span className="absolute -left-3 w-6 h-6 bg-violet-600 rounded-full"></span>
            <h2 className="text-xl font-semibold text-white">
              2025 – Aujourd’hui | BTS SIO – 2ᵉ année
            </h2>
            <p className="text-white mt-2">
              Approfondissement de mes compétences techniques :
            </p>
            <ul className="list-disc list-inside text-white mt-2 space-y-1">
              <li>Développement web (React, Node.js, PHP)</li>
              <li>Bases de données (MySQL, Firebase)</li>
              <li>Cybersécurité – Certification <strong className='text-violet-600'>ANSSI</strong></li>
              <li>Préparation de la certification <strong className='text-violet-600'>PIX</strong></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ParcoursComp
