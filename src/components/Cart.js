import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/firebase.config'; // Importa el servicio de Firestore previamente configurado
import getItems from '../utils/useFirestore';

function Cart() {
  const { cartItems, removeItem, clearCart, addToCart, restToCart, totalPrice } = useContext(CartContext);
  const [open, setOpen] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = () => {
        setOpen(true);

    };
    
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    
        setOpen(false);
        clearCart();
      };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((product) => {
      total += product.precio * product.quantity;
    });
    return total;
  };
  
  return (
    <div>
      <h2 className='fontletrita'>DISICARRO</h2>
      {cartItems.length === 0 ? (
        <p className='fontletrita'>NO HAY PRODUCTOS EN EL DISICARRO</p>
      ) : (
        <><Card>
            {cartItems.map((item) => {

              return(
              <Card className="" sx={{ maxWidth: 900, maxHeight: 150 }}>
                <CardContent className="cardCart">
                  <CardMedia
                    sx={{ height: 50, width: 50 }}
                    image={item.image}
                    title=""
                  />

                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>

                  <Typography variant="h6" className='typographyColor'>
                    ${item.precio * item.quantity}
                  </Typography>

                  <div className='divSpanNumerito'>
                    <Button onClick={() => restToCart(item)}>-</Button>
                      <span className='spanNumerito'>{item.quantity}</span>
                    <Button onClick={() => {addToCart(item)
                    }}>+</Button>
                  </div>

                  <Button color='error' variant='outlined' onClick={() => removeItem(item.id)}>
                     Eliminar
                  </Button>

                </CardContent>
              </Card>
              )})}
                <CardActions>
                <Typography className='typoTotalCarrito'>TOTAL: {calculateTotalPrice()}</Typography>
                <Button color='warning' variant='outlined' onClick={clearCart}>
                  VACIAR DISICARRO
                </Button>
                <Button color = 'success'
                variant = 'outlined'
                onClick = {() => {
                      handleClick();
                }}>
                  FINALIZAR COMPRA 
                  </Button>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    SU COMPRA FUE REALIZADA CON ÉXITO!
                  </Alert>
                </Snackbar>
                </CardActions>
          </Card></>
      )}
    </div>
  );
};

export default Cart;