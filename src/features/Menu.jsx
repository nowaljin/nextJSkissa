"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

const Menu = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    axios
      .get("/data/menu.json")
      .then((res) => {
        if (mounted) setItems(res.data || []);
      })
      .catch((err) => {
        if (mounted) setError(err.message || "Failed to load menu");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Header currentPage="menu" />
      <main className="main">
        <div className="title">
          <h1>MENU</h1>
          <p>メニュー</p>
        </div>

        {loading && <p>読み込み中...</p>}
        {error && <p className="error">エラー: {error}</p>}

        {!loading && !error && (
          <ul className="item-list">
            {items.map((item) => (
              <li key={item.id}>
                <img
                  src={`/images/menu/${item.image}`}
                  alt={`${item.name_jp}の商品画像`}
                />
                <dl>
                  <dt>{item.name_jp}</dt>
                  <dd>{item.description_jp}</dd>
                </dl>
                <p className="price">¥{item.price}</p>
                <p className="item-label">{item.label_en}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer currentPage="menu" />
    </>
  );
};

export default Menu;
