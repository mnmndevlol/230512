import Head from "next/head";
import Image from "next/image";

// import { Inter } from "@next/font/google";
//import styles from "../styles/Home.module.css";
// const inter = Inter({ subsets: ["latin"] });

import styled from "@emotion/styled";
import Link from "next/link";

const TestBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .ArticleViewInfo-wrap {
    width: 700px;
    height: 80px;

    display: flex;

    margin-bottom: 20px;
  }

  .author-image {
    margin-right: 10px;
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
`;

const TestArea = ({ title, author, date }) => {
  return (
    <TestBlock>
      <div className="ArticleViewInfo-wrap">
        <div class="author-image">
          <img src="images/Ellipse1.png" />
        </div>
        <div class="text-area-wrap">
          <div class="title">{title}</div>
          <div class="text-area-info-wrap">
            <div class="author">by {author}</div>
            <div class="date">{date}</div>
          </div>
        </div>
      </div>
    </TestBlock>
  );
};

export default TestArea;
