import React from "react";
import "@/styles/index.css";

const Home = () => {
  return (
    <>
      <section className="first-view">
        <div className="first-view-text">
          <h1>Imagination</h1>
          <p>コーヒーを待つ時間も、特別なひとときとなる。</p>
          <div className="link-button-area">
            <a className="link-button" href="/concept">詳しく見る</a>
          </div>
        </div>
      </section>

      <section className="lead">
        <div className="lead">
          <p>こちらはトップページのサンプルです。スタイルは `index.css` を使用しています。</p>
        </div>
      </section>
    </>
  );
};

export default Home;
