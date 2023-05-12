"use client";

import Head from "next/head";
import Image from "next/image";

// import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
// const inter = Inter({ subsets: ["latin"] });

import styled from "@emotion/styled";

import MenuArea from "@/components/menu";
import Link from "next/link";

import axios from "axios";
import { getDate } from "@/util/date";

const ArticleBlock = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    font-size: 50px;
    font-weight: 700;
  }

  .article-info-wrap {
    display: flex;

    width: 700px;
    margin-top: 20px;
    font-size: 13px;
  }

  .article-info-author {
    color: #e05e15;

    margin-right: 5px;
  }

  .article-info-createDate {
  }

  .article-content-image {
    background-color: #e05e15;

    display: flex;
    flex-direction: column;
    width: 800px;
  }

  .article-content-wrap {
    width: 700px;
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
  }
  .article-title {
    font-size: 24px;
    margin-top: 10px;
  }
  .article-content-text {
    font-size: 12px;
    margin-top: 5px;
  }

  .readmore-wrap {
    width: 700px;
  }
  .readmore {
    font-size: 12px;
    background: #4e95d7;
    border-radius: 5px;
    margin-bottom: 20px;
  }
`;

export default function Home({ articles }) {
  return (
    <ArticleBlock>
      <div className="logo">mnmnmnlol</div>
      <MenuArea />
      {articles?.map((article, idx) => {
        return (
          <>
            <div className="article-info-wrap">
              <div className="article-info-author">by {article.author}</div>
              <div className="article-info-createDate">
                {getDate(article.date)}
              </div>
            </div>
            <div className="article-content-image">
              <img src={article.imageUrl} />
            </div>
            <div className="article-content-wrap">
              <div className="article-title">{article.title}</div>
              <div className="article-content-text">{article.content}</div>
            </div>
            <div className="readmore-wrap">
              <button className="readmore">
                <Link href={`/article/${article._id}`}>더보기 ...</Link>
              </button>
            </div>
          </>
        );
      })}
    </ArticleBlock>
  );
}

export async function getServerSideProps(context) {
  // const id = context.query.id;
  const data = await axios.get(`http://localhost:3000/api/article`);
  return { props: { articles: data.data } };
}
