import React from 'react';

export default function VeilleTechnologique() {
  const tools = [
    {
      title: 'La Silicon Valley se convertit au « machine learning »',
      description: "Google a lancé en 2015 Smart Reply, qui analyse les courriels et propose trois réponses courtes grâce au machine learning, une intelligence artificielle entraînée sur des millions de conversations.",
      image: 'data:image/png;base64,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',
      link: '',
    },
    {
      title: 'Comment marche les grands modèles de language.',
      description: "Les grands modèles de langage apprennent sur d'énormes quantités de texte et génèrent des réponses en prédisant statistiquement le mot le plus probable à venir ensuite.",
      image: 'data:image/png;base64,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',
      link: 'https://www.youtube.com/watch?v=5sLYAQS9sWQ',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-violet-600 mb-3">
            Veille technologique
          </h1>
        </div>

        {/* Tools Cards */}
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full sm:w-96 lg:w-[480px] max-w-2xl"
            >
              <div className="h-64 bg-linear-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-8 flex flex-col min-h-80">
                <h5 className="text-2xl font-bold text-gray-900 mb-4">
                  {tool.title}
                </h5>
                <p className="text-gray-600 flex-1 mb-6 text-lg leading-relaxed">{tool.description}</p>
                <button
                  onClick={() => window.open(tool.link, '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full text-lg"
                >
                  Voir plus d'informations
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}