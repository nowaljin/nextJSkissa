import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Access = () => {
  return (
    <>
      <Header currentPage="access" />
      <main className="main">
        <div className="title">
          <h1>ACCESS</h1>
          <p>アクセス・お問い合わせ</p>
        </div>
        <div className="map">
          <h2>アクセスマップ</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.944955514112!2d139.7084580761541!3d35.67835733013124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cbe1af1ad59%3A0x258af028854f2e38!2z5bCC6ZaA5a2m5qChIOadseS6rOOCr-ODvOODq-OCuOODo-ODkeODsw!5e0!3m2!1sja!2sjp!4v1688345647966!5m2!1sja!2sjp"
            style={{border:0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact">
          <h2>お問い合わせフォーム</h2>
          <form action="#">
            <dl className="form-area">
              <dt>
                <span className="required">お名前</span>
              </dt>
              <dd>
                <input
                  className="input-text"
                  type="text"
                  name="name"
                  required
                />
              </dd>
              <dt>
                <span className="required">メールアドレス</span>
              </dt>
              <dd>
                <input
                  className="input-text"
                  type="email"
                  name="email"
                  required
                />
              </dd>
              <dt>お電話番号</dt>
              <dd>
                <input className="input-text" type="tel" name="tel" required />
              </dd>
              <dt>お問い合わせ種別</dt>
              <dd>
                <select className="select-box" name="genre" defaultValue="営業時間について">
                  <option value="ご予約について">ご予約について</option>
                  <option value="メニューについて">メニューについて</option>
                  <option value="営業時間について">
                    営業時間について
                  </option>
                </select>
              </dd>
              <dt>お客様について</dt>
              <dd>
                <label className="radio-button">
                  <input
                    type="radio"
                    name="user-type"
                    value="一般のお客様"
                    defaultChecked
                  />
                  一般のお客様
                </label>
                <label className="radio-button">
                  <input type="radio" name="user-type" value="お取引先様" />
                  お取引先様
                </label>
                <label className="radio-button">
                  <input type="radio" name="user-type" value="その他" />
                  その他
                </label>
              </dd>
              <dt>
                <span className="required">お問い合わせ内容</span>
              </dt>
              <dd>
                <textarea
                  className="message"
                  name="message"
                  required
                ></textarea>
              </dd>
            </dl>
            <p className="confirm-text">
              ご入力内容をご確認の上、お間違いがなければ [送信]
              ボタンを押してください。
            </p>
            <button className="submit-button" type="submit">
              送信
            </button>
          </form>
        </div>
      </main>

      <Footer currentPage="access" />
    </>
  );
};
export default Access;
