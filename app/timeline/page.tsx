export const metadata = {
  title: 'Timeline des Découvertes - NEXUS',
  description: 'Explorez les avancées scientifiques qui ont façonné notre monde',
};

export default function TimelinePage() {
  const timelineEvents = [
    {
      year: 2021,
      side: 'right',
      category: 'Astronomie',
      categoryColor: 'astronomy',
      dotColor: '#6f42c1',
      title: 'Lancement du Télescope Spatial James Webb',
      description: 'Le successeur de Hubble, JWST, est lancé pour observer les premières galaxies et étoiles de l\'univers.',
      image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&h=400&fit=crop',
    },
    {
      year: 2019,
      side: 'left',
      category: 'Physique',
      categoryColor: 'physics',
      dotColor: '#007bff',
      title: 'Première image d\'un trou noir',
      description: 'L\'Event Horizon Telescope capture la première image directe d\'un trou noir, M87*, validant les théories d\'Einstein.',
      image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=400&h=400&fit=crop',
    },
    {
      year: 1953,
      side: 'right',
      category: 'Biologie',
      categoryColor: 'biology',
      dotColor: '#28a745',
      title: 'Découverte de la structure de l\'ADN',
      description: 'Watson et Crick, avec les travaux de Franklin, décrivent la structure en double hélice de l\'ADN.',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=400&fit=crop',
    },
    {
      year: 1915,
      side: 'left',
      category: 'Physique',
      categoryColor: 'physics',
      dotColor: '#007bff',
      title: 'Théorie de la Relativité Générale',
      description: 'Albert Einstein publie sa théorie qui redéfinit la gravité comme une courbure de l\'espace-temps.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=400&fit=crop',
    },
  ];

  const categoryStyles: Record<string, string> = {
    astronomy: 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300',
    physics: 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300',
    biology: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300',
    chemistry: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300',
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f5f7f8] dark:bg-[#101a22] font-space">
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200/80 dark:border-slate-800/80 bg-[#f5f7f8]/80 dark:bg-[#101a22]/80 backdrop-blur-sm px-4 sm:px-6 md:px-10 py-3">
        <div className="flex items-center gap-4 text-slate-900 dark:text-slate-50">
          <div className="size-6 text-[#1f94f4]">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight tracking-[-0.015em]">NEXUS</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-center items-center gap-9">
          <a className="text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[#1f94f4]" href="/">Home</a>
          <a className="text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[#1f94f4]" href="#">Themes</a>
          <a className="text-[#1f94f4] dark:text-[#1f94f4] text-sm font-bold leading-normal" href="/timeline">Timeline</a>
          <a className="text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[#1f94f4]" href="#">About Us</a>
          <a className="text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[#1f94f4]" href="#">Contact</a>
        </div>
        <div className="flex gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1f94f4] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Log In</span>
          </button>
          <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Sign Up</span>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-50">language</span>
          </button>
        </div>
      </header>

      <main className="flex flex-1 justify-center py-10 sm:py-16 px-4">
        <div className="flex flex-col max-w-5xl flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-slate-900 dark:text-slate-50 text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Timeline des Découvertes</p>
              <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal">Explorez les avancées scientifiques qui ont façonné notre monde, de l&apos;antiquité à nos jours.</p>
            </div>
          </div>

          <div className="sticky top-[65px] z-40 bg-[#f5f7f8]/80 dark:bg-[#101a22]/80 backdrop-blur-sm py-4 my-4">
            <div className="flex gap-2 sm:gap-3 p-3 flex-wrap justify-center">
              <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-[#1f94f4] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">XXIe siècle</p>
              </div>
              <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 pl-4 pr-4 hover:bg-slate-300 dark:hover:bg-slate-700">
                <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">XXe siècle</p>
              </div>
              <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 pl-4 pr-4 hover:bg-slate-300 dark:hover:bg-slate-700">
                <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Ère moderne</p>
              </div>
              <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 pl-4 pr-4 hover:bg-slate-300 dark:hover:bg-slate-700">
                <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Renaissance</p>
              </div>
              <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 pl-4 pr-4 hover:bg-slate-300 dark:hover:bg-slate-700">
                <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Moyen-Âge</p>
              </div>
              <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 pl-4 pr-4 hover:bg-slate-300 dark:hover:bg-slate-700">
                <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">Antiquité</p>
              </div>
            </div>
          </div>

          <div className="relative w-full px-4 md:px-0 mt-8">
            {/* Central Timeline Axis with gradient */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-purple-500 via-green-500 to-blue-500"></div>

            {timelineEvents.map((event, index) => (
              <div key={index}>
                {/* Timeline Item */}
                <div className={\`relative flex items-start \${event.side === 'right' ? 'justify-end' : 'justify-start'} mb-12\`}>
                  {event.side === 'right' && <div className="hidden md:block w-1/2"></div>}

                  <div className="absolute left-1/2 top-14 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[#f5f7f8] dark:border-[#101a22]" style={{backgroundColor: event.dotColor}}></div>

                  <div className={\`w-full md:w-1/2 \${event.side === 'right' ? 'pl-0 md:pl-10' : 'pr-0 md:pr-10'}\`}>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800">
                      <p className={\`text-5xl font-black text-slate-300 dark:text-slate-700 \${event.side === 'left' ? 'text-right' : ''}\`}>{event.year}</p>
                      <div className={\`flex items-center gap-4 mt-2 \${event.side === 'left' ? 'flex-row-reverse md:flex-row' : ''}\`}>
                        <img className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700" alt={event.title} src={event.image} />
                        <div className={event.side === 'left' ? 'flex-1 text-left md:text-right' : ''}>
                          <div className={\`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold \${categoryStyles[event.categoryColor]}\`}>
                            {event.category}
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mt-1">{event.title}</h3>
                        </div>
                      </div>
                      <p className={\`text-slate-600 dark:text-slate-400 mt-3 text-sm \${event.side === 'left' ? 'text-right md:text-left' : ''}\`}>
                        {event.description}
                      </p>
                      <a className={\`text-[#1f94f4] font-bold text-sm mt-4 hover:underline \${event.side === 'left' ? 'block text-right md:text-left' : 'inline-block'}\`} href="#">
                        En savoir plus →
                      </a>
                    </div>
                  </div>

                  {event.side === 'left' && <div className="hidden md:block w-1/2"></div>}
                </div>

                {/* Century separator after second event */}
                {index === 1 && (
                  <div className="relative flex items-center justify-center my-8">
                    <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-slate-300 dark:bg-slate-700"></div>
                    <span className="z-10 bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300">XXe SIÈCLE</span>
                  </div>
                )}
              </div>
            ))}

            {/* Loading spinner */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center justify-center w-8 h-8 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col gap-6 px-5 py-10 text-center border-t border-slate-200 dark:border-slate-800 mt-16">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal hover:text-[#1f94f4]" href="#">Privacy Policy</a>
          <a className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal hover:text-[#1f94f4]" href="#">Terms of Service</a>
          <a className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal hover:text-[#1f94f4]" href="#">Contact Us</a>
          <a className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal hover:text-[#1f94f4]" href="#">About</a>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="text-slate-500 dark:text-slate-400 hover:text-[#1f94f4]" href="#">
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
          </a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-[#1f94f4]" href="#">
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path></svg>
          </a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-[#1f94f4]" href="#">
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
          </a>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">© 2024 NEXUS. All rights reserved.</p>
      </footer>
    </div>
  );
}
