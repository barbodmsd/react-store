import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductsCard({img,name,id,price}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: '60%' }}
        image={img}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price : ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" ><Link to={`/product-details/${id}/${name}`}>More details</Link></Button>
      </CardActions>
    </Card>
  );
}
