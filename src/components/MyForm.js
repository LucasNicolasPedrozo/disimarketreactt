import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from 'firebase/firestore';
import { firebase as db } from '../firebase/firebase.config';
import { Button, Snackbar } from '@mui/material';
import { getFirestore } from 'firebase/firestore';
import MuiAlert from '@mui/material/Alert';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('El nombre es requerido'),
  lastName: Yup.string().required('El apellido es requerido'),
  email: Yup.string().email('Correo electrónico inválido').required('El correo es requerido'),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref('email'), null], 'Los correos no coinciden')
    .required('La verificación de correo es requerida'),
});

const MyForm = ({ clearCart, initialProducts, totalPrice }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
  };

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const [open, setOpen] = React.useState(false);

const [idOrden, setIdOrden] = React.useState(0);

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


const handleSubmit = async (values, { resetForm }) => {
  try {
    const firestore = getFirestore();
    const orderData = {
      ...values,
      products: initialProducts.map((product) => ({
        ...product,
        totalPrice: product.precio * product.quantity, // Agrega el precio total al objeto de producto
      })),
    };
    const docRef = await addDoc(collection(firestore, 'orders'), orderData);
    console.log('Documento agregado con ID:', docRef.id);
    // Realizar acciones adicionales después de guardar el documento en Firestore
    setIdOrden(docRef.id);
    resetForm();
  } catch (error) {
    console.error('Error al guardar el documento:', error);
    // Manejar el error de alguna manera apropiada
  }
};

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
    <div className='divFormulario'>
        <div>
          <label htmlFor="firstName">Nombre:</label>
          <Field type="text" id="firstName" name="firstName" />
          <ErrorMessage name="firstName" component="div" />
        </div>

        <div>
          <label htmlFor="lastName">Apellido:</label>
          <Field type="text" id="lastName" name="lastName" />
          <ErrorMessage name="lastName" component="div" />
        </div>

        <div>
          <label htmlFor="email">Correo:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="confirmEmail">Verificar Correo:</label>
          <Field type="email" id="confirmEmail" name="confirmEmail" />
          <ErrorMessage name="confirmEmail" component="div" />
        </div>
    </div>

        <div className='productosFormu'>
          <h3>Productos:</h3>
          {initialProducts.map((product, index) => (
            <div className='divFormuHijo' key={index}>
              <p>Nombre: {product.name}</p>
              <p>Descripción: {product.description}</p>
              <p>Cantidad: {product.quantity}</p>
              <p>Precio: {product.precio * product.quantity}</p>
            </div>
          ))}
            <h3>TOTAL: ${ totalPrice }</h3>
        </div>

        <div className='cardActionsnashe'>
        <Button color='warning' variant='outlined' onClick={clearCart}>
          VACIAR DISICARRO
        </Button>
        <Button 
          type="submit"
          color = 'success'
          variant = 'outlined'
          onClick = {() => {
          handleClick();
          }}>
            FINALIZAR COMPRA 
        </Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    SU COMPRA FUE REALIZADA CON ÉXITO CON EL ID {idOrden}!
                  </Alert>
                </Snackbar>
        </div>
      </Form>
    </Formik>
  );
};

export default MyForm;
