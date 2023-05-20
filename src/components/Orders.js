import { addDoc, collection, getFirestore } from "firebase/firestore";

const sendOrder = () => {
    const order = {
        buyer: { nombre: "", email: "" },
        items: [{ name: "", precio: 0 }],
        total: 0
    };

    const db = getFirestore();
    
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));   
};