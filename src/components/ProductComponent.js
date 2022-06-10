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
              <section>
                <img src={image} alt={title} width="100%" height="300" />
              </section>
              <section className="content" style={{ height: "120px" }}>
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
