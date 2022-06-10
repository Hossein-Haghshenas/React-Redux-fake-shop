import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";
import { Grid, Image } from "semantic-ui-react";

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchproducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchproducts();
  }, []);
  return (
    <Grid relaxed="very" columns={4}>
      <ProductComponent />
    </Grid>
  );
};

export default ProductListing;
