import Link from "next/link";
import { type Article, ARTICLE_ENDPOINT } from "./components/articles";

async function getArticles(): Promise<Article[]> {
  const articles = await fetch(ARTICLE_ENDPOINT).then((res) => res.json());

  return articles;
}

export default async function Blog() {
  const articles = await getArticles();

  return (
    <>
      <div>Hello This is Blog Top page!! Select article you want read.</div>
      {articles.map((article) => (
        <div key={article.id}>
          <Link href={`/blog/${article.id}`}>{article.title}</Link>
        </div>
      ))}
      <Link href="/">Home</Link>
    </>
  );
}
