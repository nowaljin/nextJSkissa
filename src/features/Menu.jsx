import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Menu = () => {
  return (
    <>
      <Header currentPage="menu" />
      <main className="main">
        <div className="title">
          <h1>MENU</h1>
          <p>メニュー</p>
        </div>
        <ul className="item-list">
          <li>
            <img
              src="/images/menu/img-item01.jpg"
              alt="アメリカーノの商品画像"
            />
            <dl>
              <dt>アメリカーノ</dt>
              <dd>
                浅煎りの豆をこだわりの配合でブレンドした、スッキリと爽やかな飲み口の当店看板メニュー。ホットでもアイスでも。
              </dd>
            </dl>
            <p className="price">¥420</p>
            <p className="item-label">AMERICANO</p>
          </li>
        </ul>
      </main>
      <Footer currentPage="menu" />
    </>
  );
};
export default Menu;
