// import React from "react";

// const VeilleComp = () => {
//   return (
//     <section className="py-16 flex justify-center bg-gray-900">
//       <div className="w-full max-w-5xl">
//         {/* TITRE PAGE */}
//         <h1 className="text-3xl font-bold text-violet-600 text-center mb-14">
//           Veille Technologique
//         </h1>

//         {/* THEME 1 */}
//         <div className="mb-14">
//           <h2 className="text-2xl font-semibold text-white mb-6">
//             Intelligence artificielle
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* ARTICLE 1 */}
//             <div className="bg-gray-800 rounded-2xl p-6 shadow-md">
//               <h3 className="text-xl font-semibold text-white mb-3">
//                 GitHub Copilot améliore l’assistance au développement
//               </h3>

//               <p className="text-gray-300 mb-4 leading-relaxed">
//                 Cet article présente les nouvelles fonctionnalités de GitHub
//                 Copilot et explique comment l’outil utilise l’intelligence
//                 artificielle pour assister les développeurs lors de l’écriture
//                 du code. 
//               </p>

//               <p className="text-gray-400 mb-6 text-sm">
//                 Analyse personnelle : cet article m’a permis de comprendre
//                 comment l’IA peut améliorer la productivité des développeurs
//                 tout en posant des questions sur la dépendance aux outils
//                 automatisés.
//               </p>

//               <a
//                 href="https://www.lemondeinformatique.fr/actualites/lire-javascript-jquery-400-supporte-les-types-de-confiance-99134.html"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block px-6 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition"
//               >
//                 Lire l’article
//               </a>
//             </div>

//             {/* ARTICLE 2 */}
//             <div className="bg-gray-800 rounded-2xl p-6 shadow-md">
//               <h3 className="text-xl font-semibold text-white mb-3">
//                 L’IA générative dans les applications web modernes
//               </h3>

//               <p className="text-gray-300 mb-4 leading-relaxed">
//                 Cet article explique comment l’IA générative est intégrée dans
//                 les applications web afin de créer du contenu dynamique et
//                 personnalisé pour les utilisateurs.
//               </p>

//               <p className="text-gray-400 mb-6 text-sm">
//                 Analyse personnelle : ce sujet montre l’évolution rapide des
//                 usages de l’IA et son impact direct sur l’expérience
//                 utilisateur.
//               </p>

//               <a
//                 href="https://www.stackjobs.ai/blog/js-et-ia"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block px-6 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition"
//               >
//                 Lire l’article
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* THEME 2 */}
//         <div>
//           <h2 className="text-2xl font-semibold text-white mb-6">
//             Automatisation
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* ARTICLE 3 */}
//             <div className="bg-gray-800 rounded-2xl p-6 shadow-md">
//               <h3 className="text-xl font-semibold text-white mb-3">
//                 L’automatisation des tests dans le développement web
//               </h3>

//               <p className="text-gray-300 mb-4 leading-relaxed">
//                 Cet article décrit les outils et méthodes permettant
//                 d’automatiser les tests logiciels afin d’améliorer la fiabilité
//                 et la qualité des applications web.
//               </p>

//               <p className="text-gray-400 mb-6 text-sm">
//                 Analyse personnelle : cet article m’a aidé à comprendre
//                 l’importance des tests automatisés dans les projets
//                 professionnels.
//               </p>

//               <a
//                 href="https://www.sqli.com/fr-fr/automatisation-tests-site-ecommerce"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block px-6 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition"
//               >
//                 Lire l’article
//               </a>
//             </div>

//             {/* ARTICLE 4 */}
//             <div className="bg-gray-800 rounded-2xl p-6 shadow-md">
//               <h3 className="text-xl font-semibold text-white mb-3">
//                 CI/CD et automatisation des déploiements
//               </h3>

//               <p className="text-gray-300 mb-4 leading-relaxed">
//                 Cet article présente les principes de l’intégration continue et
//                 du déploiement continu, ainsi que leur rôle dans
//                 l’automatisation des mises en production.
//               </p>

//               <p className="text-gray-400 mb-6 text-sm">
//                 Analyse personnelle : ce sujet montre comment l’automatisation
//                 améliore la rapidité et la fiabilité des déploiements.
//               </p>

//               <a
//                 href="https://www.lemondeinformatique.fr/actualites/lire-github-devoile-le-sdk-de-copilot-99147.html"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block px-6 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition"
//               >
//                 Lire l’article
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VeilleComp;

import React from "react";

const VeilleComp = () => {
  return (
    <section className="py-16 flex justify-center bg-gray-900">
      <div className="w-full max-w-5xl">
        {/* TITRE PAGE */}
        <h1 className="text-3xl font-bold text-violet-600 text-center mb-8">
          Veille Technologique
        </h1>

        {/* INTRODUCTION */}
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 leading-relaxed mt-20 bg-gray-800 rounded-2xl p-6">
          Dans le cadre de ma veille technologique, j’ai choisi de m’intéresser à
          l’intelligence artificielle et à l’automatisation. Ces deux domaines
          occupent une place de plus en plus importante dans le monde de
          l’informatique et du développement logiciel. Ils permettent d’améliorer
          la productivité des développeurs, d’optimiser les processus et
          d’accompagner l’évolution des pratiques professionnelles, ce qui en
          fait des sujets essentiels à suivre.
        </p>

        {/* THEME 1 */}
        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Intelligence artificielle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ARTICLE 1 */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-white mb-3">
                GitHub Copilot améliore l’assistance au développement
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Cet article présente les nouvelles fonctionnalités de GitHub
                Copilot et explique comment l’outil utilise l’intelligence
                artificielle pour assister les développeurs lors de l’écriture
                du code.
              </p>

              <p className="text-gray-400 mb-6 text-sm">
                Analyse personnelle : cet article m’a permis de comprendre
                comment l’IA peut améliorer la productivité des développeurs
                tout en posant des questions sur la dépendance aux outils
                automatisés.
              </p>

              <a
                href="https://www.lemondeinformatique.fr/actualites/lire-javascript-jquery-400-supporte-les-types-de-confiance-99134.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition"
              >
                Lire l’article
              </a>
            </div>

            {/* ARTICLE 2 */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-white mb-3">
                L’IA générative dans les applications web modernes
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Cet article explique comment l’IA générative est intégrée dans
                les applications web afin de créer du contenu dynamique et
                personnalisé pour les utilisateurs.
              </p>

              <p className="text-gray-400 mb-6 text-sm">
                Analyse personnelle : ce sujet montre l’évolution rapide des
                usages de l’IA et son impact direct sur l’expérience
                utilisateur.
              </p>

              <a
                href="https://www.stackjobs.ai/blog/js-et-ia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition"
              >
                Lire l’article
              </a>
            </div>
          </div>
        </div>

        {/* THEME 2 */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Automatisation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ARTICLE 3 */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-white mb-3">
                L’automatisation des tests dans le développement web
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Cet article décrit les outils et méthodes permettant
                d’automatiser les tests logiciels afin d’améliorer la fiabilité
                et la qualité des applications web.
              </p>

              <p className="text-gray-400 mb-6 text-sm">
                Analyse personnelle : cet article m’a aidé à comprendre
                l’importance des tests automatisés dans les projets
                professionnels.
              </p>

              <a
                href="https://www.sqli.com/fr-fr/automatisation-tests-site-ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition"
              >
                Lire l’article
              </a>
            </div>

            {/* ARTICLE 4 */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-white mb-3">
                CI/CD et automatisation des déploiements
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Cet article présente les principes de l’intégration continue et
                du déploiement continu, ainsi que leur rôle dans
                l’automatisation des mises en production.
              </p>

              <p className="text-gray-400 mb-6 text-sm">
                Analyse personnelle : ce sujet montre comment l’automatisation
                améliore la rapidité et la fiabilité des déploiements.
              </p>

              <a
                href="https://www.lemondeinformatique.fr/actualites/lire-github-devoile-le-sdk-de-copilot-99147.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition"
              >
                Lire l’article
              </a>
            </div>
          </div>
        </div>

        {/* CONCLUSION */}
        <div className="mt-20 bg-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Conclusion
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Cette veille technologique m’a permis de mieux comprendre l’impact
            de l’intelligence artificielle et de l’automatisation dans le
            domaine du développement informatique. Ces technologies transforment
            les méthodes de travail des développeurs en rendant les processus
            plus rapides, plus fiables et plus efficaces. La réalisation de
            cette veille m’a également aidé à développer un esprit d’analyse et
            à rester informé des évolutions majeures du secteur.
          </p>
        </div>

      </div>
    </section>
  );
};

export default VeilleComp;
