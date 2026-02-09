import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="first-view">
          <div className="first-view-text">
            <h1>
              Imagination <br />
              take you everywhere.
            </h1>
            <p>コーヒーを待つ時間も、特別なひとときとなる。</p>
          </div>
        </div>
        <div className="lead">
          <p>
            「想像力はあなたをどこにでも連れて行ってくれる」
            <br />
            注文を待つ間に広げた、一冊の本の 中に見つけたことば。
            <br />
            ゆったり流れる時間の中で、想像をふくらませる楽しさを思い出す。
            <br />
            そんな時間を過ごすとき、おいしいコーヒーがあるとうれしい。
          </p>
          <div className="link-button-area">
            <a className="link-button" href="./concept.html">
              CONCEPT
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
