import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { cartItems, addToCart } = useCart();

  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }

    setProduct(foundProduct);
  }, [id, navigate]);

  // Prevent crash while loading / if not found
  if (!product) {
    return (
      <div className="page">
        <div className="container">
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantitylabel = productInCart
    ? `(${productInCart.quantity})`
    : "";

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">${product.price}</p>
            <p className="product-detail-description">{product.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart {productQuantitylabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
