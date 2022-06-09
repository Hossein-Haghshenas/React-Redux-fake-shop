import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <section className="four column wide">
        <Link to={`/product/${id}`}>
          <section className="ui link cards" key={id}>
            <section className="card ">
              <section className="image">
                <img src={image} alt={title} />
              </section>
              <section className="content">
                <section className="header">{title}</section>
                <section className="meta price">$ {price}</section>
                <section className="meta">{category}</section>
              </section>
            </section>
          </section>
        </Link>
      </section>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
