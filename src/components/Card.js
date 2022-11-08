import Img_mobile from "../Assets/image-product-mobile.jpg";
import Img_desktop from "../Assets/image-product-desktop.jpg";
import "../styles/Card.scss";
import Btn from "./Btn";

export default function Card() {
  return (
    <div className="card">
      <div className="img_container">
        {" "}
        <img src={Img_mobile} alt="photo_parfum" className="card_img_mobile" />
        <img
          src={Img_desktop}
          alt="photo_parfum"
          className="card_img_desktop"
        />
      </div>

      <div className="card_body">
        <div className="card_text">
          <h1 className="card_body_title">PERFUME</h1>
          <p className="card_body_description">
            <span> Gabrielle Essence</span>
            <span>Eau de Parfum</span>
          </p>

          <div className="card_body_text">
            <p className="p-l1">A floral, solar and voluptubus</p>
            <p>interpertation composed by Olivier</p>
            <p>Polge, Perfumer-Creator for the House of</p>
            <p>CHANEL.</p>
          </div>
          <div className="card_price">
            <span className="card_price_promo">$149.99</span>
            <span className="card_price_normal">$169.99</span>
          </div>
          <Btn />
        </div>
      </div>
    </div>
  );
}
