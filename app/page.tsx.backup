import { getRecentArticles } from '@/lib/articles';
import Link from 'next/link';

export const metadata = {
  title: 'NEXUS - Actualité Scientifique',
  description: 'Découvrez les dernières avancées scientifiques et technologiques',
};

export default async function HomePage() {
  const articles = await getRecentArticles(6);
  
  const themes = [
    { name: 'Science', color: '#2196F3', icon: '🔬' },
    { name: 'Médecine', color: '#F44336', icon: '⚕️' },
    { name: 'Technologie', color: '#9C27B0', icon: '💻' },
    { name: 'Environnement', color: '#4CAF50', icon: '🌍' },
    { name: 'Espace', color: '#FF9800', icon: '🚀' },
    { name: 'Société', color: '#FFEB3B', icon: '👥' },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">NEXUS</h1>
          <p className="text-2xl opacity-90">L&apos;actualité scientifique accessible à tous</p>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Explorer par thème</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {themes.map(theme => (
            <div
              key={theme.name}
              className="p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer"
              style={{ backgroundColor: theme.color + '20' }}
            >
              <div className="text-4xl mb-2">{theme.icon}</div>
              <div className="font-semibold" style={{ color: theme.color }}>
                {theme.name}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Derniers articles</h2>
        {articles.length === 0 ? (
          <p className="text-gray-600">
            Aucun article pour le moment. Les articles générés par N8N apparaîtront ici.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <Link key={article.slug} href={`/articles/${article.slug}`}>
                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-white text-sm mb-2"
                      style={{ backgroundColor: article.color }}
                    >
                      {article.theme}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{article.chapo}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
