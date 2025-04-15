interface Author {
    name: string;
    socials: string | null;
  }
  
  interface NewsObj {
    id: number;
    title: string;
    authors: Author[];
    image_url: string;
    summary: string;
    published_at: string;
    updated_at: string;
    featured: boolean;
  }
  
  export default NewsObj;
  