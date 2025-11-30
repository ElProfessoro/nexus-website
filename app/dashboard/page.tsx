export const metadata = {
  title: 'Dashboard Utilisateur NEXUS',
  description: 'Votre espace personnel NEXUS',
};

export default function DashboardPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-[#f5f7f8] dark:bg-[#101a22] font-space">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-full md:w-64 lg:w-72 flex-shrink-0 bg-white dark:bg-gray-900/50 p-6 border-r border-gray-200 dark:border-gray-800">
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{backgroundImage: 'url("https://ui-avatars.com/api/?name=Jean+Dupont&background=1f94f4&color=fff")'}}></div>
                <div className="flex flex-col">
                  <h1 className="text-gray-900 dark:text-white text-base font-medium leading-normal">Jean Dupont</h1>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Explorateur</p>
                </div>
              </div>
              <nav className="flex flex-col gap-2">
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#1f94f4]/10 dark:bg-[#1f94f4]/20" href="/dashboard">
                  <span className="material-symbols-outlined text-[#1f94f4] text-2xl">grid_view</span>
                  <p className="text-[#1f94f4] text-sm font-medium leading-normal">Mon Espace</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="/explorer">
                  <span className="material-symbols-outlined text-gray-700 dark:text-gray-300 text-2xl">explore</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-normal">Découvrir</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#">
                  <span className="material-symbols-outlined text-gray-700 dark:text-gray-300 text-2xl">bookmark</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-normal">Mes Favoris</p>
                </a>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#1f94f4] to-blue-600 text-white flex flex-col gap-3 text-center">
                <h3 className="font-bold text-lg">Passez à Premium</h3>
                <p className="text-sm opacity-80">Accédez à des contenus exclusifs et des fonctionnalités avancées.</p>
                <button className="w-full cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-white text-[#1f94f4] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 transition-colors">
                  <span className="truncate">Passer Premium</span>
                </button>
              </div>
              <div className="flex flex-col gap-2 border-t border-gray-200 dark:border-gray-800 pt-4">
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" href="#">
                  <span className="material-symbols-outlined text-gray-700 dark:text-gray-300 text-2xl">logout</span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-normal">Déconnexion</p>
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-col gap-1">
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Mon Espace</h1>
                <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">1,247 pts</p>
              </div>
            </div>

            {/* Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Articles Sauvegardés */}
                <section>
                  <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">Articles Sauvegardés</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex flex-col gap-3 group">
                        <div className="relative w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
                          <button className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-lg">bookmark_remove</span>
                          </button>
                        </div>
                        <div>
                          <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Article scientifique {i}</p>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">Physique</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Historique de Lecture */}
                <section>
                  <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">Historique de Lecture</h2>
                  <div className="space-y-4">
                    {[85, 40].map((progress, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900/50 rounded-xl shadow-sm">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-white">Article de science {i + 1}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Par Dr. Exemple</p>
                          <div className="mt-2">
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                              <div className="bg-[#1f94f4] h-1.5 rounded-full" style={{width: `${progress}%`}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="lg:col-span-1 space-y-8">
                {/* Vos Statistiques */}
                <section>
                  <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">Vos Statistiques</h2>
                  <div className="p-6 bg-white dark:bg-gray-900/50 rounded-xl shadow-sm space-y-6">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Articles lus par thème</h3>
                    <div className="relative w-48 h-48 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">12</span>
                        <span className="block text-sm text-gray-500 dark:text-gray-400">Articles lus</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">7h 42m</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Temps (mois)</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-gray-900 dark:text-white">Physique</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Thème favori</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
