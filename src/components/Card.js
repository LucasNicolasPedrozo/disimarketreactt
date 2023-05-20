import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '../App.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function MediaCard( props ) {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });    
    const { addToCart } = useContext(CartContext);
    const handleAddToCart = (product) => {
        addToCart(product);
        handleClick();
      };
    const {description, name, id, precio, category, image} = props.producto;
    const {isDetail} = props.isDetail;
    const [detail, setDetail] = React.useState(props.isDetail);
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

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
            <Typography variant="h6" className='typographyColor'>
                ${precio};
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description};
            </Typography>
        </CardContent>

        <CardActions className='cardActionsnashe'>
        {!detail && <Button component={Link} to = {`/item/${id}`} size="small">MAS INFO</Button>}
        <Button color='success' size="small" onClick={() => handleAddToCart(props.producto)}>
                Agregar al disicarro
        </Button>
        </CardActions>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Agregaste 1 elemento al disicarro!
        </Alert>
        </Snackbar>
        </Card>
  );
};