const GITHUB_USER = 'ElProfessoro';
const GITHUB_RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_USER}/nexus-content/main`;

export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio: {
    fr: string;
    en: string;
    es: string;
    de: string;
  };
  specialties: string[];
  avatar: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
  languages: string[];
}

export async function getAuthor(authorId: string): Promise<Author> {
  try {
    const response = await fetch(`${GITHUB_RAW_BASE}/authors/${authorId}.json`, {
      next: { revalidate: 86400 }
    });
    
    if (!response.ok) throw new Error(`Author not found: ${authorId}`);
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching author:', error);
    throw error;
  }
}
