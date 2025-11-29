import matter from 'gray-matter';

const GITHUB_USER = 'ElProfessoro';
const GITHUB_RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_USER}/nexus-content/main`;
const GITHUB_API_BASE = `https://api.github.com/repos/${GITHUB_USER}/nexus-content`;

export interface Article {
  title: string;
  slug: string;
  date: string;
  author: string;
  theme: string;
  color: string;
  tags: string[];
  image: string;
  chapo: string;
  locale: string;
  alternates: {
    fr: string;
    en: string;
    es: string;
    de: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonical: string;
  };
  content: string;
}

export async function getArticle(slug: string, locale: string = 'fr'): Promise<Article> {
  try {
    const response = await fetch(`${GITHUB_RAW_BASE}/articles/${locale}/${slug}.md`, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) throw new Error(`Article not found: ${slug}`);
    
    const markdown = await response.text();
    const { data, content } = matter(markdown);
    
    return { ...data, content, slug } as Article;
  } catch (error) {
    console.error('Error fetching article:', error);
    throw error;
  }
}

export async function getAllArticles(locale: string = 'fr'): Promise<Article[]> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/contents/articles/${locale}`, {
      next: { revalidate: 3600 },
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });
    
    if (!response.ok) return [];
    
    const files = await response.json();
    const mdFiles = files.filter((f: any) => f.name.endsWith('.md') && !f.name.startsWith('_'));
    
    const articles = await Promise.all(
      mdFiles.map(async (file: any) => {
        const slug = file.name.replace('.md', '');
        try {
          return await getArticle(slug, locale);
        } catch {
          return null;
        }
      })
    );
    
    return articles
      .filter((a): a is Article => a !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export async function getRecentArticles(limit: number = 10, locale: string = 'fr'): Promise<Article[]> {
  const articles = await getAllArticles(locale);
  return articles.slice(0, limit);
}
