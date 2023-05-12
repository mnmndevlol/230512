"use client";

import Head from "next/head";
import Image from "next/image";

// import { Inter } from "@next/font/google";
//import styles from "@/styles/Home.module.css";
// const inter = Inter({ subsets: ["latin"] });

import styled from "@emotion/styled"; //이모션 사용하기 위해

import Link from "next/link"; //링크 사용하기 위해

const MenuBlock = styled.div`
  .menu {
    font-size: 13px;
    margin: 0 0 70px 0;
    display: flex;
    & > div {
      // 바로 아래 div에 속성 넣기
      margin-right: 5px;
      padding-right: 5px;
      border-right: 0.1rem solid black;
    }
  }
`;

const MenuArea = () => {
  return (
    <>
      <MenuBlock>
        <div className="menu">
          <div>
            <Link href="/">HOME</Link>
          </div>
          <div>
            <Link href="/about">ABOUT</Link>
          </div>
          <div>BOARD</div>
          <div>
            <Link href="/article">ARTICLE</Link>
          </div>
          <div>PROJECT</div>
          <div>SUBSCRIPTION</div>
          <div>MYPAGE</div>
          <div>LOGOUT</div>
        </div>
      </MenuBlock>
    </>
  );
};

export default MenuArea; //지금 만든 컴포넌트를 쏴줌
