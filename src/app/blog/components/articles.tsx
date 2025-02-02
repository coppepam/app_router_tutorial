export type Article = {
  id: number;
  title: string;
  text: string;
  date: string;
};

export const ARTICLE_ENDPOINT = "http://localhost:4030/articles";
