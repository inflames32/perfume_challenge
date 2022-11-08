import cart_img from "../Assets/icon-cart.svg";
import "../styles/Btn.scss";
export default function Btn() {
  return (
    <>
      <button className="btn-addtocart">
        <img src={cart_img} alt="" />
        Add to Cart
      </button>
    </>
  );
}
