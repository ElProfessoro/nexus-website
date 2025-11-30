export const metadata = {
  title: 'Explorer par Curiosité - NEXUS',
  description: 'Laissez-vous surprendre par la science',
};

export default function ExplorerPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f5f7f8] dark:bg-[#101a22] font-space">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/80 dark:border-gray-800/80 px-4 sm:px-6 md:px-10 py-3">
        <div className="flex items-center gap-4 text-gray-900 dark:text-white">
          <div className="size-6 text-[#1f94f4]">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tighter">NEXUS</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#1f94f4] dark:hover:text-[#1f94f4]" href="/">Home</a>
          <a className="text-sm font-medium text-[#1f94f4] dark:text-[#1f94f4]" href="/explorer">Explorer</a>
          <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#1f94f4] dark:hover:text-[#1f94f4]" href="#">Thèmes</a>
          <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#1f94f4] dark:hover:text-[#1f94f4]" href="#">À propos</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1f94f4] text-white text-sm font-bold tracking-wide">
            <span className="truncate">S&apos;inscrire</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200/60 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 text-sm font-bold tracking-wide">
            <span className="truncate">Connexion</span>
          </button>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8">
          <div className="flex flex-col items-center text-center gap-2">
            <h1 className="text-gray-900 dark:text-white text-5xl font-black tracking-tighter">Explorer par Curiosité</h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">Laissez-vous surprendre par la science</p>
          </div>

          <div className="flex w-full flex-col items-center gap-4">
            <div className="flex gap-3 flex-wrap justify-center">
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#101a22] pl-4 pr-3 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Courte lecture</p>
                <span className="material-symbols-outlined text-base">expand_more</span>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#101a22] pl-4 pr-3 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Longue lecture</p>
                <span className="material-symbols-outlined text-base">expand_more</span>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#101a22] pl-4 pr-3 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800/50">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Astrophysique</p>
                <span className="material-symbols-outlined text-base">expand_more</span>
              </button>
            </div>

            <div className="w-full max-w-sm">
              <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-gray-200/60 dark:bg-gray-800/60 p-1">
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-[#101a22] has-[:checked]:shadow-sm text-gray-500 dark:text-gray-400 has-[:checked]:text-gray-900 dark:has-[:checked]:text-white text-sm font-medium">
                  <span className="truncate">Débutant</span>
                  <input defaultChecked className="invisible w-0" name="difficulty-level" type="radio" value="Débutant"/>
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-[#101a22] has-[:checked]:shadow-sm text-gray-500 dark:text-gray-400 has-[:checked]:text-gray-900 dark:has-[:checked]:text-white text-sm font-medium">
                  <span className="truncate">Intermédiaire</span>
                  <input className="invisible w-0" name="difficulty-level" type="radio" value="Intermédiaire"/>
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-[#101a22] has-[:checked]:shadow-sm text-gray-500 dark:text-gray-400 has-[:checked]:text-gray-900 dark:has-[:checked]:text-white text-sm font-medium">
                  <span className="truncate">Expert</span>
                  <input className="invisible w-0" name="difficulty-level" type="radio" value="Expert"/>
                </label>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl bg-white dark:bg-[#101a22] rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden mt-8">
            <div className="flex flex-col md:flex-row">
              <img className="w-full md:w-1/3 h-48 md:h-auto object-cover" alt="DNA" src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400" />
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">Génétique</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">Le Secret de l&apos;ADN : Comment le code génétique définit le vivant</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Plongez au cœur de la double hélice pour comprendre comment quelques molécules orchestrent la complexité de la vie.
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <button className="flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-[#1f94f4] text-white text-base font-bold tracking-wide">
                    <span className="truncate">Lire maintenant</span>
                  </button>
                  <button className="flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-gray-200/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 text-base font-bold tracking-wide">
                    <span className="truncate">Nouvelle découverte</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
