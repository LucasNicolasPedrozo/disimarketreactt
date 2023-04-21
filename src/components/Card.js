import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '../App.css';

export default function MediaCard( props ) {
    const {description, name, id, category, image} = props.producto;
    const {isDetail} = props.isDetail;
    const [detail, setDetail] = React.useState(props.isDetail);
  return (
        <Card className="card" sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title=""
            />
        <CardContent className="cardcontentdiv">
            <Typography gutterBottom variant="h5" component="div">
                {name};
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description};
            </Typography>
        </CardContent>
        <CardActions>
        {!detail && <Button component={Link} to = {`/item/${id}`} size="small">MAS INFO</Button>}
        </CardActions>
        </Card>
  );
};