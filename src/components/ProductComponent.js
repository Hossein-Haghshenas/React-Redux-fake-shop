import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Grid item>
        <Link to={`/product/${id}`}>
          <Card sx={{ width: "20rem", height: "35rem" }}>
            <Grid width="100%">
              <img src={image} alt={title} width="100%" height="300px" />
            </Grid>
            <CardContent sx={{ with: "100%", height: "8rem" }}>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                with: "100%",
                height: "max-content",
              }}
            >
              <Typography gutterBottom variant="button" component="span">
                {price} $
              </Typography>
              <Typography gutterBottom variant="button" component="span">
                {category}
              </Typography>
            </CardActions>
          </Card>
        </Link>
      </Grid>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
