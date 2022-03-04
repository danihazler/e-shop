import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartInformation, setCartInformation] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const handleAddToCart = (itemSelected) => {
    setCartInformation((prev) => {
      // Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === itemSelected.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === itemSelected.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...itemSelected, amount: 1 }];
    });

    setTotalQuantity((prev) => prev + 1);
  };

  return (
    <CartContext.Provider
      value={{
        cartInformation,
        totalQuantity,
        handleAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
