import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const RealisationComp = () => {

    useEffect(() => {
      AOS.init({
        duration: 600,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
      })
    }, [])


  return (
    <section className="py-16 flex justify-center bg-gray-900" >
      <div className="w-full max-w-4xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        {/* TITRE PAGE */}
        <h1 className="text-3xl font-bold text-violet-600 text-center mb-14">
          Projets
        </h1>

        {/* PROJET 1 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">
            Site de Restauration Italien
          </h2>

          <p className="text-gray-400 mb-3">
            <strong>Technologies utilisées : </strong>

            <span className="text-violet-600">HTML, CSS, GitHub</span>
          </p>

          <p className="text-white leading-relaxed">
            Site vitrine pour un restaurant italien spécialisé dans les pâtes.
            Ce projet a été réalisé en HTML et CSS afin de présenter le
            restaurant, ses spécialités, ses menus et son univers visuel. Il m’a
            permis de travailler la mise en page, le design responsive et
            l’organisation du contenu d’un site web.
          </p>
        </div>

        {/* PROJET 2 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">
            Jeu du pendu
          </h2>

          <p className="text-gray-400 mb-3">
            <strong>Technologies utilisées : </strong>

            <span className="text-violet-600">
              HTML, CSS, JavaScript, GitHub, Netlify
            </span>
          </p>

          <p className="text-white leading-relaxed">
            Projet de jeu de lettres consistant à deviner un mot ou une phrase
            en proposant des lettres une par une. Chaque erreur fait progresser
            le dessin du pendu. Ce projet m’a permis de travailler la logique
            JavaScript, la gestion des événements utilisateur et la manipulation
            du DOM.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealisationComp;
