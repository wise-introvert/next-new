import { GetStaticProps, InferGetStaticPropsType } from "next";

import styles from "../styles/news.module.scss";

export interface Source {
  id: string;
  name: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface Data {
  status: string;
  totalResults: number;
  articles: Article[];
}

export const getStaticProps: GetStaticProps = async (
  _
): Promise<{ props: { articles: Article[] } }> => {
  const res: Response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=cbcf51bcb48d4dd887ab68872a7f9701"
  );
  const data: Data = await res.json();
  return {
    props: {
      articles: data.articles
    }
  };
};
const News: React.FunctionComponent<InferGetStaticPropsType<
  typeof getStaticProps
>> = ({
  articles
}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <div className={styles.container}>
      {articles.map((article: Article) => (
        <div
          className={styles.card}
          key={article.url}
          onClick={() => {
            window.open(article.url, "_blank");
          }}
        >
          <p className={styles.content}>{article.content}</p>
          <img src={article.urlToImage} />
          <span>{article.title}</span>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};
export default News;
