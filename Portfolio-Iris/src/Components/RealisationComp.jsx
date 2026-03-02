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
      <div className="w-full max-w-7xl px-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        {/* TITRE PAGE */}
        <h1 className="text-3xl font-bold text-violet-600 text-center mb-14">
          Projets
        </h1>

        {/* GRILLE DE PROJETS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* PROJET 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-violet-600 mb-2">
              Site de Restauration Italien
            </h2>

            <p className="text-gray-400 text-sm mb-3">
              <strong>Technologies : </strong>
              <span className="text-violet-600">HTML, CSS, GitHub</span>
            </p>

            <p className="text-white text-sm leading-relaxed mb-4">
              Site vitrine pour un restaurant italien spécialisé dans les pâtes.
              Ce projet a été réalisé en HTML et CSS afin de présenter le
              restaurant, ses spécialités, ses menus et son univers visuel.
            </p>

            <a 
              href="https://github.com/xSEALVER/Restau-Repo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              📄 Documentation
            </a>
          </div>

          {/* PROJET 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-violet-600 mb-2">
              Jeu du Pendu
            </h2>

            <p className="text-gray-400 text-sm mb-3">
              <strong>Technologies : </strong>
              <span className="text-violet-600">HTML, CSS, JavaScript, Netlify</span>
            </p>

            <p className="text-white text-sm leading-relaxed mb-4">
              Projet de jeu de lettres consistant à deviner un mot ou une phrase
              en proposant des lettres une par une. Chaque erreur fait progresser
              le dessin du pendu.
            </p>

            <a 
              href="https://github.com/xSEALVER/JeuPendu-Repo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              📄 Documentation
            </a>
          </div>

          {/* PROJET 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-violet-600 mb-2">
              Site de Réservation de Voyages
            </h2>

            <p className="text-gray-400 text-sm mb-3">
              <strong>Technologies : </strong>
              <span className="text-violet-600">React, React Router, Bootstrap, Context API</span>
            </p>

            <p className="text-white text-sm leading-relaxed mb-4">
              Site e-commerce de voyages développé en React avec React Router, Bootstrap et un contexte CartProvider pour la gestion du panier.
            </p>

            <a 
              href="https://github.com/xSEALVER/PROJET-VOYAGE-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              📄 Documentation
            </a>
          </div>

          {/* PROJET 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-violet-600 mb-2">
              Calculatrice Web
            </h2>

            <p className="text-gray-400 text-sm mb-3">
              <strong>Technologies : </strong>
              <span className="text-violet-600">HTML, CSS, JavaScript</span>
            </p>

            <p className="text-white text-sm leading-relaxed mb-4">
              Calculatrice web développée en HTML, CSS et JavaScript permettant d'effectuer des opérations arithmétiques de base via une interface claire et interactive.
            </p>

            <a 
              href="https://github.com/xSEALVER/Calculatrice-Repo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              📄 Documentation
            </a>
          </div>

          {/* PROJET 5 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-violet-600 mb-2">
              Site de Location de Voitures
            </h2>

            <p className="text-gray-400 text-sm mb-3">
              <strong>Technologies : </strong>
              <span className="text-violet-600">React, React Router, Context API, AOS</span>
            </p>

            <p className="text-white text-sm leading-relaxed mb-4">
              Application de location de voitures développée en React, intégrant React Router, Context API et animations AOS. Elle permet l'inscription, la connexion, la réservation de véhicules.
            </p>

            <a 
              href="https://github.com/xSEALVER/car-rent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              📄 Documentation
            </a>
          </div>

          {/* PROJET 6 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-violet-600 mb-2">
              Site de Réservation de Films
            </h2>

            <p className="text-gray-400 text-sm mb-3">
              <strong>Technologies : </strong>
              <span className="text-violet-600">Symfony, Doctrine, Twig, PHP</span>
            </p>

            <p className="text-white text-sm leading-relaxed mb-4">
              Application web développée avec Symfony permettant aux utilisateurs de réserver des films dans des cinémas. Les clients peuvent créer un compte et parcourir le catalogue de films disponibles.
            </p>

            <a 
              href="https://github.com/xSEALVER/CINEGO-REPO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              📄 Documentation
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealisationComp;