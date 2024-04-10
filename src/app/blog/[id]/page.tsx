import Link from "next/link";
import { type Article, ARTICLE_ENDPOINT } from "../components/articles";

export async function generateStaticParams() {
  const res = await fetch(ARTICLE_ENDPOINT);
  const articles = await res.json();

  return articles.map(({ id }: Article) => ({
    id: id.toString(),
  }));
}

async function getArticleDetail(id: Pick<Article, "id">): Promise<Article> {
  const res = await fetch(`${ARTICLE_ENDPOINT}?id=${id}`);
  const article = await res.json();

  return article[0];
}

export default async function BlogDetail({
  params,
}: {
  params: { id: Pick<Article, "id"> };
}) {
  const { id } = params;
  const article = await getArticleDetail(id);
  return (
    <div className="grid place-items-center">
      <h3>{article.title}</h3>
      <div>{article.text}</div>
      <Link href="/blog">Blog top</Link>
      <Link href="/">Home</Link>
    </div>
  );
}
