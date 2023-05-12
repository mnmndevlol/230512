"use client";
import Head from "next/head";
import Image from "next/image";

// import { Inter } from "@next/font/google";
//import styles from "@/styles/Home.module.css";
// const inter = Inter({ subsets: ["latin"] });

import styled from "@emotion/styled";
import MenuArea from "@/components/menu";

const IndexBlock = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: #f2e749;
  padding-bottom: 20px;

  .logo {
    font-size: 100px;
  }

  .scooter {
    margin-bottom: 70px;
  }

  .recent-wrap {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    width: 700px;
    margin-bottom: 30px;
  }

  .recent-text {
    font-size: 12px;
    margin-bottom: 8px;
  }
  .recent-images {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    gap: 15px;
  }

  .memoArea-wrap {
    width: 520px;
  }

  .memoArea-title {
    font-size: 12px;
    /* border-bottom: 1px solid; */
    border-bottom: 2px solid black;
    padding-bottom: 6px;
    margin-bottom: 9px;
  }
  .memo {
    display: flex;

    /* 플렉스로 정렬한거 공간 똑같이 나눠줌 */
    justify-content: space-between;

    margin: 0 0 10px 0;
  }
  .memo-text {
    font-size: 12px;
  }

  .memo-info-wrap {
    display: flex;
  }
  .memo-info-author {
    font-size: 12px;
    margin-right: 11px;
  }
  .memo-info-date {
    font-size: 12px;
  }

  .pagenation {
    /* background-color: blueviolet; */
    display: flex;
    justify-content: center;
    margin-bottom: 14px;
  }

  .pagenation button {
    padding: 1.5px;
    background-color: transparent;
    border: 0;
  }

  .form {
    display: flex;
    justify-content: center;
  }

  .name-form {
    width: 66px;
    margin-right: 9px;
    height: 30px;
    border: 0;
  }

  .text-form {
    width: 223px;
    height: 30px;
    margin-right: 9px;
    border: 0;
  }

  .submit-button {
    border: 0;
  }
`;

export default function Home() {
  return (
    <IndexBlock className="wrap">
      <div className="logo">mnmnlol</div>
      <MenuArea />
      <div className="scooter">
        <img src="./images/scooter.png" />
      </div>

      <div className="recent-wrap">
        <div className="recent-text">최근이미지</div>
        <div className="recent-images">
          <img src="./images/R16.png" />
          <img src="./images/R16.png" />
          <img src="./images/R16.png" />
          <img src="./images/R16.png" />
          <img src="./images/R16.png" />
          <img src="./images/R16.png" />
          <img src="./images/R16.png" />
          <img src="./images/R16.png" />
          <img src="./images/R16.png" />
          <img src="./images/R16.png" />
        </div>
      </div>

      <div className="memoArea-wrap">
        <div className="memoArea-title">한줄방명록</div>
        <div className="memo">
          <div className="memo-text">제목은 여기에 들어가 있습니다.</div>
          <div className="memo-info-wrap">
            <div className="memo-info-author">by Admin</div>
            <div className="memo-info-date">2021.12.25</div>
          </div>
        </div>

        <div className="memo">
          <div className="memo-text">제목은 여기에 들어가 있습니다.</div>
          <div className="memo-info-wrap">
            <div className="memo-info-author">by Admin</div>
            <div className="memo-info-date">2021.12.25</div>
          </div>
        </div>

        <div className="memo">
          <div className="memo-text">제목은 여기에 들어가 있습니다.</div>
          <div className="memo-info-wrap">
            <div className="memo-info-author">by Admin</div>
            <div className="memo-info-date">2021.12.25</div>
          </div>
        </div>
      </div>

      <div className="pagenation">
        <button> 1</button>
        <button> 2</button>
        <button> 3</button>
        <button> 4</button>
        <button> 5</button>
        <button> 6</button>
        <button> 7</button>
        <button> 8</button>
        <button> 9</button>
        <button> ...</button>
      </div>

      <div className="form">
        <input placeholder="이름" className="name-form"></input>
        <input
          className="text-form"
          placeholder="30자 이내로 작성 하실 수 있습니다."
        />
        <button className="submit-button">작성</button>
      </div>
    </IndexBlock>
  );
}
