import { getArticle, getAllArticles } from '@/lib/articles';
import { getAuthor } from '@/lib/authors';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const articles = await getAllArticles('fr');
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const article = await getArticle(params.slug);
    return {
      title: article.seo.metaTitle,
      description: article.seo.metaDescription,
      alternates: {
        canonical: article.seo.canonical,
        languages: {
          'fr': article.alternates.fr,
          'en': article.alternates.en,
          'es': article.alternates.es,
          'de': article.alternates.de,
          'x-default': article.alternates.fr,
        },
      },
    };
  } catch {
    return {
      title: 'Article non trouvé',
      description: 'Cet article n\'existe pas',
    };
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  let article;
  let author;

  try {
    article = await getArticle(params.slug);
    author = await getAuthor(article.author);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f5f7f8] dark:bg-[#101a22]">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 z-50 w-full h-1">
        <div className="h-full transition-all duration-300" style={{backgroundColor: article.color, width: '30%'}}></div>
      </div>

      {/* Top Navigation */}
      <header className="sticky top-0 z-40 flex items-center justify-between w-full px-4 sm:px-10 py-3 bg-white/80 dark:bg-[#101a22]/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <Link href="/" className="flex items-center gap-4 text-gray-900 dark:text-white">
          <div className="w-6 h-6">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight">NEXUS</h2>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-900 dark:text-gray-300">
          <a className="text-sm font-medium hover:text-[#1f94f4]" href="/">Home</a>
          <a className="text-sm font-medium hover:text-[#1f94f4]" href="#science">Science</a>
          <a className="text-sm font-medium hover:text-[#1f94f4]" href="#medecine">Médecine</a>
          <a className="text-sm font-medium hover:text-[#1f94f4]" href="#technologie">Technologie</a>
          <a className="text-sm font-medium hover:text-[#1f94f4]" href="#environnement">Environnement</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="hidden md:flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 bg-[#1f94f4] text-white text-sm font-bold hover:bg-[#1a7fd4]">
            <span>Subscribe</span>
          </button>
          <div className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10" style={{backgroundImage: 'url("https://ui-avatars.com/api/?name=User&background=1f94f4&color=fff")'}}></div>
        </div>
      </header>

      {/* Hero Image & Title */}
      <div className="relative w-full h-[60vh] min-h-[400px] max-h-[700px]">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 50%), url("${article.image}")`
          }}
        ></div>
        <div className="relative flex flex-col justify-end h-full max-w-5xl px-6 py-12 mx-auto text-white">
          <div className="flex h-8 items-center justify-center gap-x-2 rounded-lg px-4 w-fit mb-4" style={{backgroundColor: article.color}}>
            <p className="text-white text-sm font-medium leading-normal tracking-widest">{article.theme.toUpperCase()}</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10" style={{backgroundImage: `url("${author.avatar}")`}}></div>
              <p className="text-sm font-medium">Par {author.fullName}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>5 min de lecture</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto px-6 py-12">
        {/* Sidebar */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24">
            {/* Author Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <img src={author.avatar} alt={author.fullName} className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{author.fullName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{author.specialties.join(', ')}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{author.bio.fr}</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Table of Contents</h3>
              <nav className="space-y-2 text-sm">
                <a href="#introduction" className="block text-gray-600 dark:text-gray-400 hover:text-[#1f94f4]">Introduction</a>
                <a href="#power" className="block text-gray-600 dark:text-gray-400 hover:text-[#1f94f4]">The Power of Qubits</a>
                <a href="#applications" className="block text-gray-600 dark:text-gray-400 hover:text-[#1f94f4]">Potential Applications and Challenges</a>
                <a href="#future" className="block text-gray-600 dark:text-gray-400 hover:text-[#1f94f4]">Sources and References</a>
              </nav>
            </div>
          </div>
        </aside>

        {/* Article Content */}
        <main className="lg:col-span-6">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {article.content}
            </ReactMarkdown>
          </article>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Comment Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Commentaires (0)</h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Soyez le premier à commenter cet article.</p>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#1f94f4] text-white rounded-lg hover:bg-[#1a7fd4] font-medium">
                Ajouter un commentaire
              </button>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24 space-y-6">
            {/* Related Articles */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Articles similaires</h3>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex gap-3">
                    <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded flex-shrink-0"></div>
                    <div>
                      <p className="text-xs font-bold" style={{color: article.color}}>{article.theme.toUpperCase()}</p>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2 hover:text-[#1f94f4] cursor-pointer">
                        Article connexe #{i}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Access limité */}
            <div className="bg-gradient-to-br from-[#1f94f4] to-[#0d6efd] rounded-lg p-6 text-white">
              <h3 className="font-bold mb-2">Accès illimité</h3>
              <p className="text-sm mb-4 opacity-90">
                Accédez à des contenus exclusifs et des fonctionnalités avancées.
              </p>
              <button className="w-full bg-white text-[#1f94f4] rounded-lg px-4 py-2 font-bold text-sm hover:bg-gray-100">
                Passer Premium
              </button>
            </div>

            {/* Ad */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <p className="font-bold">Publicité</p>
                <p className="text-sm">300 x 250</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Vous aimerez aussi */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Vous aimerez aussi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="group cursor-pointer">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 group-hover:scale-105 transition-transform duration-300"></div>
                </div>
                <p className="text-xs font-bold mb-2" style={{color: article.color}}>{article.theme.toUpperCase()}</p>
                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-[#1f94f4]">
                  Article recommandé #{i}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
