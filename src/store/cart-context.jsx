import React from 'react'

const CartContext = React.useContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
})

export default CartContext