"use client";

import Head from "next/head";
import Image from "next/image";

// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
// const inter = Inter({ subsets: ["latin"] });

import MenuArea from "@/components/menu";
import styled from "@emotion/styled";
import axios from "axios";

const AboutBlock = styled.div`
  /* align-items: center; */

  .wrap {
    background-color: beige;
    /* height: 100vh; */
    width: 100%;
    min-height: 100vh;
  }

  .topImage {
    // position: absolute; 한 애의 기준이 된다
    /* position: relative; */
    display: flex;
    justify-content: center;
  }
  .logoImage {
    position: absolute; //rerative 있는 div 왼쪽 위 기준
    left: calc(50% - 84px); // 중요
    top: 47px;
  }

  .logo {
    margin-top: 60px;
    font-size: 100px;
    display: flex;
    justify-content: center;
  }

  .menu {
    /* background-color: bisque; */
    margin-top: 50px;

    display: flex;
    justify-content: center;

    font-size: 14px;

    & > div {
      // 바로 아래 div에 속성 넣기
      margin-right: 5px;
      padding-right: 5px;
      border-right: 0.1rem solid black;
    }
  }
  .contentWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .contentArea {
    background-color: white;
    width: 640px;
    padding: 30px 30px 30px 30px;
    margin: 20px 0 10px 0;

    /* align-items: center; */
  }
`;

export default function Home({ content }) {
  return (
    <AboutBlock>
      <div className="wrap">
        <div className="topImage">
          <img src="images/topimage.png" />
        </div>
        <div className="logoImage">
          <img src="images/profile.png" />
        </div>
        <div className="logo">mnmnlol</div>
        <MenuArea />
        <div className="contentWrap">
          <div className="contentArea">{content}</div>
        </div>
      </div>
    </AboutBlock>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/api/about");
  const content = response.data;
  return {
    props: {
      content: content.content,
    },
  };
}
