import { getRecentArticles } from '@/lib/articles';
import Link from 'next/link';

export const metadata = {
  title: 'NEXUS - Actualité Scientifique',
  description: 'Découvrez les dernières avancées scientifiques et technologiques',
};

export default async function HomePage() {
  const articles = await getRecentArticles(10);
  
  // Premier article pour le hero
  const heroArticle = articles[0] || null;
  // Autres articles pour la grille
  const gridArticles = articles.slice(1, 5);
  
  const themes = [
    { name: 'Science', slug: 'science', color: '#2196F3' },
    { name: 'Médecine', slug: 'medecine', color: '#F44336' },
    { name: 'Technologie', slug: 'technologie', color: '#9C27B0' },
    { name: 'Environnement', slug: 'environnement', color: '#4CAF50' },
    { name: 'Espace', slug: 'espace', color: '#FF6B35' },
    { name: 'Société', slug: 'societe', color: '#FFC107' },
  ];

  const trends = [
    { number: '01', title: 'Comment les trous noirs supermassifs façonnent les galaxies', theme: 'Espace' },
    { number: '02', title: 'L\'édition génétique CRISPR ouvre une nouvelle ère en médecine', theme: 'Médecine' },
    { number: '03', title: 'La fusion nucléaire est-elle la clé de l\'énergie propre ?', theme: 'Technologie' },
    { number: '04', title: 'Psychologie de la désinformation à l\'ère numérique', theme: 'Société' },
    { number: '05', title: 'Les microplastiques détectés dans le sang humain', theme: 'Environnement' },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white dark:bg-[#101a22]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#101a22]/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between h-16">
          <div className="flex items-center gap-4 text-gray-900 dark:text-white">
            <div className="w-6 h-6 text-[#1f94f4]">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight">NEXUS</h2>
          </div>
          
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-8">
            {themes.map(theme => (
              <a key={theme.slug} className="text-sm font-semibold leading-normal hover:text-[#1f94f4] transition-colors" href={`#${theme.slug}`}>
                {theme.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-4 bg-[#1f94f4] text-white text-sm font-bold">
              <span>Premium</span>
            </button>
            <button className="hidden sm:flex cursor-pointer items-center justify-center rounded-full h-9 w-9 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="flex cursor-pointer items-center justify-center rounded-full h-9 w-9 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="hidden sm:flex items-center gap-2 rounded-full h-9 px-2 bg-gray-100 dark:bg-gray-800 cursor-pointer">
              <span className="font-bold text-sm">FR</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="bg-center bg-no-repeat bg-cover rounded-full w-9 h-9" style={{backgroundImage: 'url("https://ui-avatars.com/api/?name=User&background=1f94f4&color=fff")'}}></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
        {/* Hero Section */}
        {heroArticle && (
          <section className="mb-12">
            <Link href={`/articles/${heroArticle.slug}`}>
              <div 
                className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl min-h-[500px] cursor-pointer hover:opacity-95 transition-opacity"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%), url("${heroArticle.image}")`
                }}
              >
                <div className="flex w-full flex-col sm:flex-row items-end justify-between gap-4 p-8">
                  <div className="flex max-w-2xl flex-1 flex-col gap-3">
                    <p className="inline-block w-fit rounded-md px-3 py-1 text-sm font-bold text-white" style={{backgroundColor: heroArticle.color}}>
                      {heroArticle.theme.toUpperCase()}
                    </p>
                    <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
                      {heroArticle.title}
                    </h1>
                    <p className="text-gray-200 text-lg font-medium">
                      Par {heroArticle.author}, {new Date(heroArticle.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                  <button className="flex min-w-[120px] self-start sm:self-auto items-center justify-center rounded-full h-12 px-6 bg-white text-gray-900 text-base font-bold hover:bg-gray-200 transition-colors">
                    <span>Lire l&apos;article</span>
                  </button>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Grid Articles + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {gridArticles.map(article => (
              <Link key={article.slug} href={`/articles/${article.slug}`}>
                <article className="group cursor-pointer">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="inline-block rounded-md px-2 py-1 text-xs font-bold text-white mb-2" style={{backgroundColor: article.color}}>
                    {article.theme.toUpperCase()}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#1f94f4] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                    {article.chapo}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>5 min de lecture</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      1.2k
                    </span>
                    <button className="ml-auto">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Tendances */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tendances</h3>
              <div className="space-y-4">
                {trends.map(trend => (
                  <div key={trend.number} className="flex gap-3">
                    <span className="text-2xl font-bold text-gray-300 dark:text-gray-700">{trend.number}</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white hover:text-[#1f94f4] cursor-pointer transition-colors">
                        {trend.title}
                      </p>
                      <p className="text-xs text-gray-500">{trend.theme}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Explorer par curiosité */}
            <div className="bg-gradient-to-br from-[#1f94f4] to-[#0d6efd] rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Explorer par curiosité</h3>
              <p className="text-sm mb-4 opacity-90">
                Laissez le hasard vous guider vers une nouvelle découverte.
              </p>
              <Link href="/explorer">
                <button className="flex items-center gap-2 bg-white text-[#1f94f4] rounded-lg px-4 py-2 font-bold text-sm hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Article Aléatoire
                </button>
              </Link>
            </div>

            {/* Publicité */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl h-64 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <p className="font-bold">Publicité</p>
                <p className="text-sm">300 x 250</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 text-[#1f94f4]">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">NEXUS</span>
            </div>
            
            <nav className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
              <a href="#" className="hover:text-[#1f94f4] transition-colors">À propos</a>
              <a href="#" className="hover:text-[#1f94f4] transition-colors">Contact</a>
              <a href="#" className="hover:text-[#1f94f4] transition-colors">CGU</a>
              <a href="#" className="hover:text-[#1f94f4] transition-colors">Newsletter</a>
            </nav>

            <div className="flex gap-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#1f94f4] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#1f94f4] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#1f94f4] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-xs text-gray-500">
            © Copyright NEXUS 2025. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
