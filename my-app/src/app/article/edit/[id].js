import Head from "next/head";
import Image from "next/image";

// import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
// const inter = Inter({ subsets: ["latin"] });

import styled from "@emotion/styled";

import MenuArea from "@/components/menu";
import Link from "next/link";

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ArticleNewBlock = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wrap {
    display: flex;
    flex-direction: column;
  }

  .wrap div {
    display: flex;
    flex-direction: column;
    margin: 10px 0 10px 0;
  }
`;

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState();
  const getArticleById = async () => {
    if (!id) return;
    console.log(router.query);
    const data = await axios.get(`http://localhost:3000/api/article/${id}`);
    setArticle(data.data);
  };
  useEffect(() => {
    getArticleById();
  }, [id]);
  if (!article) return null;

  return (
    <ArticleNewBlock>
      <form
        className="wrap"
        onSubmit={(e) => {
          e.preventDefault();
          //   console.log(e.target.title.value);

          axios.put(`http://localhost:3000/api/article/${id}`, {
            title: article.title,
            content: article.content,
            imageUrl: article.imageUrl,
            author: article.author,
            authorImage: article.authorImage,
          });
        }}
      >
        <div>
          title:
          <input
            name="title"
            value={article.title}
            onChange={(e) => {
              setArticle((s) => ({ ...s, title: e.target.value }));
            }}
          ></input>
        </div>
        <div>
          content:
          <input
            name="content"
            value={article.content}
            onChange={(e) => {
              setArticle((s) => ({ ...s, content: e.target.value }));
            }}
          ></input>
        </div>
        <div>
          imageUrl:
          <input
            name="imageUrl"
            value={article.imageUrl}
            onChange={(e) => {
              setArticle((s) => ({ ...s, iomageUrl: e.target.value }));
            }}
          ></input>
        </div>
        <div>
          author:
          <input
            name="author"
            value={article.author}
            onChange={(e) => {
              setArticle((s) => ({ ...s, author: e.target.value }));
            }}
          ></input>
        </div>
        <div>
          authorImage:
          <input
            name="authorImage"
            value={article.authorImage}
            onChange={(e) => {
              setArticle((s) => ({ ...s, authorImage: e.target.value }));
            }}
          ></input>
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
    </ArticleNewBlock>
  );
}
