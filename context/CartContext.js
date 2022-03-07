import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartInformation, setCartInformation] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setSubtotal(calculateTotal(cartInformation));
  }, [totalQuantity, cartInformation]);

  const handleAddToCart = (itemSelected) => {
    setCartInformation((prev) => {
      // Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === itemSelected.id);

      if (isItemInCart) {
        setSubtotal((prevSubtotal) => prevSubtotal + itemSelected.price);

        return prev.map((item) =>
          item.id === itemSelected.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      setSubtotal((prevSubtotal) => prevSubtotal + itemSelected.price);
      return [...prev, { ...itemSelected, amount: 1 }];
    });

    setTotalQuantity((prev) => prev + 1);
  };

  const calculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.amount * item.price, 0);

  const handleRemoveFromCart = (id) => {
    setCartInformation((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );

    setTotalQuantity((prev) => prev - 1);
  };

  return (
    <CartContext.Provider
      value={{
        cartInformation,
        totalQuantity,
        subtotal,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
