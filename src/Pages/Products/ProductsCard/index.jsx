import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ProductsCard({ img, name, id, price }) {
  return (
    <Card sx={{ width: 300, height: 370 }}>
      <CardMedia sx={{ height: "50%" }} image={img} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name.slice(0, 20)}...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price : ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link
            style={{ color: "teal" }}
            to={`/product-details/${id}/${name
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            More details
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
