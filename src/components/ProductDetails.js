import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productAction";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { title, image, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchproducts = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selectedProduct(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productId && productId !== "" && fetchproducts();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <section className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <section>...Loading</section>
      ) : (
        <section className="ui placeholder segment">
          <section className="ui two column stackable center aligned grid">
            <section className="ui vertical divider">AND</section>
            <section className="middle aligned row">
              <section className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </section>
              <section className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <section className="ui vertical animated button" tabIndex="0">
                  <section className="hidden content">
                    <i className="shop icon"></i>
                  </section>
                  <section className="visible content">Add to Cart</section>
                </section>
              </section>
            </section>
          </section>
        </section>
      )}
    </section>
  );
};

export default ProductDetails;
