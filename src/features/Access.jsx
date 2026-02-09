import React from "react";
import "@/styles/access.css";

const Access = () => {
  return (
    <main>
      <section className="title">
        <div className="hero-inner">
          <h1>ACCESS</h1>
          <p>アクセス・店舗情報のご案内</p>
        </div>
      </section>

      <section className="content access-content">
        <h2 className="section-title">アクセスマップ</h2>
        <div className="map">
          <iframe
            title="kissa-map"
            src="https://maps.google.com/maps?q=Shibuya%20Station&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Access;
