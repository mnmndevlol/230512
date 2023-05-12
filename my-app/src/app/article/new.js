import Head from "next/head";
import Image from "next/image";

// import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
// const inter = Inter({ subsets: ["latin"] });

import styled from "@emotion/styled";

import MenuArea from "@/components/menu";
import Link from "next/link";

import axios from "axios";

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
  return (
    <ArticleNewBlock>
      <form
        className="wrap"
        onSubmit={(e) => {
          e.preventDefault();
          //   console.log(e.target.title.value);

          const title = e.target.title.value;

          const content = e.target.content.value;

          const imageUrl = e.target.imageUrl.value;

          const author = e.target.author.value;

          const authorImage = e.target.authorImage.value;

          console.log(title, content, imageUrl, author, authorImage);

          axios.post("http://localhost:3000/api/article", {
            title,
            content,
            imageUrl,
            author,
            authorImage,
          });
        }}
      >
        <div>
          title:<input name="title"></input>
        </div>
        <div>
          content:<input name="content"></input>
        </div>
        <div>
          imageUrl:<input name="imageUrl"></input>
        </div>
        <div>
          author:<input name="author"></input>
        </div>
        <div>
          authorImage:<input name="authorImage"></input>
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
    </ArticleNewBlock>
  );
}
