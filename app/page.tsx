import { getRecentArticles } from '@/lib/articles';
import Link from 'next/link';

export const metadata = {
  title: 'Page d\'accueil NEXUS',
  description: 'Découvrez les dernières avancées scientifiques et technologiques',
};

export default async function HomePage() {
  const articles = await getRecentArticles(10);

  const heroArticle = articles[0] || null;
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
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* TopNavBar */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#101a22]/80 backdrop-blur-sm border-b border-solid border-gray-200 dark:border-gray-800 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between h-16">
            <div className="flex items-center gap-4 text-gray-900 dark:text-white">
              <div className="size-6 text-[#1f94f4]">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold font-heading tracking-tight">NEXUS</h2>
            </div>

            <nav className="hidden lg:flex flex-1 items-center justify-center gap-8">
              {themes.map(theme => (
                <a key={theme.slug} className="text-sm font-semibold leading-normal hover:text-[#1f94f4] dark:hover:text-[#1f94f4] transition-colors" href={`#${theme.slug}`}>
                  {theme.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-4 bg-[#1f94f4] text-white text-sm font-bold leading-normal tracking-wide">
                <span className="truncate">Premium</span>
              </button>
              <button className="hidden sm:flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 gap-2 text-sm font-bold leading-normal min-w-0 px-2.5 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-xl">search</span>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 gap-2 text-sm font-bold leading-normal min-w-0 px-2.5 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-xl">notifications</span>
              </button>
              <div className="hidden sm:flex items-center gap-2 rounded-full h-9 px-2 bg-gray-100 dark:bg-gray-800 cursor-pointer">
                <span className="font-bold text-sm">FR</span>
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </div>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnvUL65q3oOeH5uun0MrulXN6x2zY-NXl2Hm1lp3Ak_n0-a1pWZ8_hd25PuxMg0TQFyvOYwbKTCmhhXryWfYWQqHWdyoV4lIIvA6TgUbNyxPzhBSlm1hZ9o7944zRHcnggPk5baTmvwtvfAImEbEO4MPNSNkt7Yo5j_mpIcrxwRLoPEkarlxx09wkaDb4b7Ra-zcxB1YGjxwTHTPvf8lxIRNyd0EBygkroboMIrIu56ihDPPR19WybdvPO27F6pC9Js2QsL8bfrFR2")'}}></div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
          {/* Hero Section Card */}
          {heroArticle && (
            <section className="mb-12">
              <Link href={`/articles/${heroArticle.slug}`}>
                <div className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl min-h-[500px]" style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%), url("${heroArticle.image}")`
                }}>
                  <div className="flex w-full flex-col sm:flex-row items-end justify-between gap-4 p-8">
                    <div className="flex max-w-2xl flex-1 flex-col gap-3">
                      <p className="inline-block w-fit rounded-md px-3 py-1 text-sm font-bold text-white" style={{backgroundColor: heroArticle.color}}>
                        {heroArticle.theme.toUpperCase()}
                      </p>
                      <h1 className="text-white font-heading text-4xl lg:text-5xl font-bold leading-tight">
                        {heroArticle.title}
                      </h1>
                      <p className="text-gray-200 text-lg font-medium leading-normal">
                        Par {heroArticle.author}, {new Date(heroArticle.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                    <button className="flex min-w-[120px] max-w-[480px] self-start sm:self-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-white text-gray-900 text-base font-bold leading-normal tracking-wide hover:bg-gray-200 transition-colors">
                      <span className="truncate">Lire l&apos;article</span>
                    </button>
                  </div>
                </div>
              </Link>
            </section>
          )}

          <div className="grid grid-cols-12 gap-8">
            {/* Articles Grid */}
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
                {gridArticles.map(article => (
                  <Link key={article.slug} href={`/articles/${article.slug}`}>
                    <div className="flex flex-col gap-4 group cursor-pointer">
                      <div className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover rounded-lg overflow-hidden relative border-2 border-transparent group-hover:border-[#2196F3] transition-all duration-300">
                        <img className="w-full h-full object-cover" alt={article.title} src={article.image} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="inline-block w-fit rounded-md px-2 py-0.5 text-xs font-bold text-white" style={{backgroundColor: article.color}}>
                          {article.theme.toUpperCase()}
                        </p>
                        <h3 className="text-gray-900 dark:text-white text-xl font-bold font-heading leading-tight line-clamp-2 group-hover:text-[#1f94f4] dark:group-hover:text-[#1f94f4] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed line-clamp-3">
                          {article.chapo}
                        </p>
                        <div className="flex items-center justify-between text-gray-500 dark:text-gray-500 text-xs mt-2">
                          <p>{article.author}, Il y a 2h · 5 min de lecture</p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-base">visibility</span>
                              <span>1.2k</span>
                            </div>
                            <span className="material-symbols-outlined text-lg">bookmark_border</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="col-span-12 lg:col-span-4 space-y-8">
              {/* Tendances */}
              <div className="bg-gray-100/50 dark:bg-gray-800/20 p-6 rounded-lg">
                <h2 className="text-gray-900 dark:text-white text-xl font-bold font-heading tracking-tight mb-4">Tendances</h2>
                <div className="flex flex-col">
                  {trends.map(trend => (
                    <a key={trend.number} className="flex items-center gap-4 py-3 border-b border-gray-200 dark:border-gray-700 group" href="#">
                      <p className="text-2xl font-bold font-heading text-gray-400 dark:text-gray-500 group-hover:text-[#1f94f4] transition-colors">{trend.number}</p>
                      <div className="flex flex-col">
                        <p className="text-gray-800 dark:text-gray-200 text-base font-semibold leading-normal line-clamp-2 group-hover:text-[#1f94f4] transition-colors">
                          {trend.title}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{trend.theme}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Explorer par curiosité */}
              <div className="bg-gray-100/50 dark:bg-gray-800/20 p-6 rounded-lg text-center">
                <h3 className="text-gray-900 dark:text-white text-lg font-bold font-heading mb-2">Explorer par curiosité</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Laissez le hasard vous guider vers une nouvelle découverte.</p>
                <Link href="/explorer">
                  <button className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full h-11 px-6 bg-[#1f94f4] text-white text-base font-bold leading-normal tracking-wide hover:bg-[#1f94f4]/90 transition-colors">
                    <span className="material-symbols-outlined">casino</span>
                    <span className="truncate">Article Aléatoire</span>
                  </button>
                </Link>
              </div>

              {/* Advertisement */}
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg w-full h-[250px] flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <p>Publicité</p>
                  <p>300 x 250</p>
                </div>
              </div>
            </aside>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-900/50 mt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                <div className="size-6 text-[#1f94f4]">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-bold font-heading tracking-tight">NEXUS</h2>
              </div>
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
                <a className="hover:text-[#1f94f4]" href="#">À propos</a>
                <a className="hover:text-[#1f94f4]" href="#">Contact</a>
                <a className="hover:text-[#1f94f4]" href="#">CGU</a>
                <a className="hover:text-[#1f94f4]" href="#">Newsletter</a>
              </nav>
              <div className="flex gap-4">
                <a className="text-gray-500 dark:text-gray-400 hover:text-[#1f94f4]" href="#"><svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.11,9.75 4.26,10.54C3.55,10.51 2.88,10.31 2.3,10V10.05C2.3,12.11 3.76,13.81 5.79,14.22C5.45,14.31 5.08,14.35 4.7,14.35C4.43,14.35 4.17,14.32 3.92,14.28C4.47,15.93 6.08,17.11 7.96,17.14C6.5,18.25 4.63,18.91 2.63,18.91C2.28,18.91 1.93,18.89 1.58,18.85C3.49,20.09 5.76,20.83 8.28,20.83C16,20.83 20.34,14.25 20.34,8.81C20.34,8.59 20.33,8.37 20.32,8.15C21.17,7.55 21.89,6.82 22.46,6Z"></path></svg></a>
                <a className="text-gray-500 dark:text-gray-400 hover:text-[#1f94f4]" href="#"><svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 5.58,20 10,20C10.74,20 11.47,19.92 12.16,19.75C12.06,19.45 12,19.14 12,18.81C12,17.23 13.58,15.92 15.2,15.5C15.8,16.8 17.16,17.71 18.73,17.71C20.54,17.71 22,16.25 22,14.44C22,12.92 21.05,11.66 19.68,11.19C20.15,10.34 19.89,9.26 19.11,8.47C19.11,8.47 18.06,8.14 16.5,9.21C15.6,8.97 14.65,8.86 13.68,8.86C11.5,8.86 9.5,9.45 8,10.5C8,10.5 6.44,9.66 5.86,9.91C5.17,10.27 5.1,11.14 5.25,11.83C4.19,12.16 3.42,12.83 3.06,13.7C2.5,13.06 2.19,12.35 2.19,11.58C2.19,8.53 4.81,6.04 7.92,6.04C9.28,6.04 10.5,6.5 11.44,7.24C11.64,7.03 11.86,6.83 12.09,6.63C11.4,6.23 10.6,6 9.77,6C6.5,6 3.8,8.59 3.8,11.75C3.8,12.5 4,13.2 4.34,13.82C4.33,13.82 4.33,13.83 4.32,13.83C4.32,14.93 5.22,15.83 6.33,15.83C6.83,15.83 7.26,15.63 7.59,15.31C8.3,16.41 9.6,17.14 11.11,17.14C11.43,17.14 11.74,17.1 12.04,17.03C11.3,16.12 10.86,15 10.86,13.81C10.86,11.63 12.63,9.86 14.81,9.86C16.11,9.86 17.23,10.45 17.92,11.35C18.23,11.23 18.54,11.12 18.86,11.03C18.33,12.43 17.2,13.54 15.81,13.91C16.5,14.54 17.55,14.94 18.73,14.94C19.82,14.94 20.81,14.44 21.5,13.62C21.72,13.8 21.87,14.04 21.94,14.28C21.94,14.33 21.94,14.38 21.94,14.44C21.94,16.19 20.48,17.65 18.73,17.65C17.22,17.65 15.91,16.78 15.26,15.56C13.56,15.97 12.06,17.28 12.06,18.81C12.06,19.09 12.1,19.36 12.18,19.62C12.91,19.83 13.67,19.94 14.44,19.94C19.72,19.94 24,15.63 24,10.35C24,6.46 21.11,3.22 17.23,2.29C15.68,2.09 14.08,2 12.45,2C12.3,2 12.15,2 12,2Z"></path></svg></a>
                <a className="text-gray-500 dark:text-gray-400 hover:text-[#1f94f4]" href="#"><svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.1,3 19,3M8.5,18H6V9.5H8.5V18M7.25,8.27C6.47,8.27 5.85,7.65 5.85,6.87C5.85,6.1 6.47,5.47 7.25,5.47C8.03,5.47 8.65,6.1 8.65,6.87C8.65,7.65 8.03,8.27 7.25,8.27M18,18H15.5V13.25C15.5,12.03 14.67,11.2 13.5,11.2C12.33,11.2 11.5,12.03 11.5,13.25V18H9V9.5H11.5V10.75H11.5C11.88,10.09 12.6,9.5 13.5,9.5C15.91,9.5 18,11.38 18,14.25V18Z"></path></svg></a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>© Copyright NEXUS 2025. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
