import React from 'react'

const projetsRows = [
  { label: "GLPI", key: "glpi" },
  { label: "Stage 1ère et 2ème année (Site vitrine)", key: "stage_vitrine" },
  { label: "Site E-enseignement", key: "site_e" },
  { label: "Snake", key: "snake" },
  { label: "Création d'entreprise", key: "creation" },
]

const data = [
  {
    competence: "Gérer le patrimoine informatique",
    glpi: true, stage_vitrine: false, site_e: false, snake: false, creation: false,
  },
  {
    competence: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    glpi: true, stage_vitrine: false, site_e: false, snake: false, creation: false,
  },
  {
    competence: "Développer la présence en ligne de l'organisation",
    glpi: false, stage_vitrine: true, site_e: true, snake: true, creation: false,
  },
  {
    competence: "Travailler en mode projet",
    glpi: false, stage_vitrine: true, site_e: true, snake: true, creation: false,
  },
  {
    competence: "Mettre à disposition des utilisateurs un service informatique",
    glpi: true, stage_vitrine: false, site_e: false, snake: false, creation: false,
  },
  {
    competence: "Organiser son développement professionnel",
    glpi: false, stage_vitrine: false, site_e: false, snake: false, creation: true,
  },
]

const TabCompetencesComp = () => {
  return (
    <section className="py-16 flex justify-center bg-gray-900">
      <div className="w-full max-w-5xl px-4">

        <div className="text-center mb-14">
          <h1
            data-aos="fade-down"
            className="font-bold text-3xl text-violet-600"
          >
            Tableau des Compétences
          </h1>
        </div>

        <div
          className="overflow-x-auto rounded-3xl shadow-lg"
          data-aos="fade-up"
        >
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-violet-600">
                <th className="px-4 py-3 text-left font-semibold text-white border border-violet-500 w-52">
                  Compétences
                </th>
                {projetsRows.map((p) => (
                  <th
                    key={p.key}
                    className="px-3 py-3 text-center font-semibold text-white border border-violet-500 min-w-[130px]"
                  >
                    {p.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
                >
                  <td className="border border-gray-600 px-4 py-3 font-medium text-white align-middle">
                    {row.competence}
                  </td>
                  {projetsRows.map((p) => (
                    <td
                      key={p.key}
                      className="border border-gray-600 px-3 py-3 text-center align-middle"
                    >
                      {row[p.key] ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-violet-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}

export default TabCompetencesComp