import Head from "next/head";
import Image from "next/image";

// import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
// const inter = Inter({ subsets: ["latin"] });

import styled from "@emotion/styled";
import Link from "next/link";

import MenuArea from "@/components/menu";

import axios from "axios";
import { getDate } from "@/util/date";
import { useRouter } from "next/router";

const ArticleViewBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .logo {
    font-size: 50px;
    padding: 30px 0 0 0; // 패딩은 안에서 마진은 밖에서
  }
  .menu {
    font-size: 13px;
    margin: 10px 0 20px 0;

    display: flex;
    justify-content: center;

    & > div {
      // 바로 아래 div에 속성 넣기
      margin-right: 5px;
      padding-right: 5px;
      border-right: 0.1rem solid black;
    }
  }

  .ArticleViewInfo-wrap {
    background-color: blueviolet;
    width: 700px;
    height: 80px;
    /* margin-bottom: 44px; */

    /* gap: 10px; */

    display: flex;

    margin-bottom: 20px;
  }

  .author-image {
    margin-right: 10px;
  }

  .authorImage {
    width: 80px;
    height: 80px;
  }

  .info {
    /* display: flex; */
    /* gap: 5px; */
  }

  .text-area-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  .text-area-info-wrap {
    display: flex;
    font-size: 13px;
    gap: 10px;
  }
  .author {
    color: #e05e15;
  }
  .title {
  }
  .date {
  }

  .contentArea-image {
    margin-bottom: 50px;
    width: 700px;
    display: flex;
    justify-content: center;
  }

  .contentArea-text {
    font-size: 12px;
    width: 700px;
    margin-bottom: 50px;
  }

  .delete {
    font-size: 12px;
    color: red;
  }
`;

export default function Home({ id, article }) {
  const router = useRouter();
  console.log(article);
  return (
    <ArticleViewBlock>
      <div className="logo">mnmnmnlol</div>
      <MenuArea />

      <div className="ArticleViewInfo-wrap">
        <div className="author-image">
          <img className="authorImage" src={article.authorImage} />
        </div>
        <div className="text-area-wrap">
          <div className="title">{article.title}</div>
          <div className="text-area-info-wrap">
            <div className="author">by {article.author}</div>
            <div className="date">{getDate(article.date)}</div>
            <div
              className="delete"
              onClick={async () => {
                await axios.delete(`http://localhost:3000/api/article/${id}`);
                router.push("/article");
              }}
            >
              X
            </div>
          </div>
        </div>
      </div>

      <div className="contentArea-image">
        <img src={article.imageUrl} />
      </div>
      <div className="contentArea-text">{article.content}</div>
      <div
        onClick={() => {
          router.push("/article");
        }}
      >
        목록
      </div>
    </ArticleViewBlock>
  );
}

export async function getServerSideProps(context) {
  // const id = context.query.id;
  const id = context.params.id;
  const data = await axios.get(`http://localhost:3000/api/article/${id}`);
  return { props: { id, article: data.data } };
}
