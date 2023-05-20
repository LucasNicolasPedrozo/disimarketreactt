const ItemModel = {
    id: 0,
    name: "",
    precio: 0,
    description: "",
    image: "",
    category: 0
};

const OrderModel = {
    date: "",
    id: 0,
    items: [{ amount: 0, item: ItemModel }]
};

const CollectionOrdersModel = {
    orders: [OrderModel]
};