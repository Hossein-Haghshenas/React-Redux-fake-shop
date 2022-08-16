import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

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
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        marginTop="2rem"
        spacing={4}
      >
        <ProductComponent />
      </Grid>
    </Container>
  );
};

export default ProductListing;
