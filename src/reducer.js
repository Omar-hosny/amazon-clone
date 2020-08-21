export const initialState = {
  cart: [
    {
      id: 454545,
      title:
        "SAMSUNG 75-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN75TU8000FXZA, 2020 Model)",
      price: 950,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg",
    },
    {
      id: 123456,
      title:
        "SAMSUNG 75-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN75TU8000FXZA, 2020 Model)",
      price: 950,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg",
    },
  ],
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      // logic for remove item from cart
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      if (index >= 0) {
        // item exist in cart remove it
        newCart.splice(index, 1);
      }
      return {
        ...state,
        cart: newCart,
        // another way to remove item from cart
        // cart: state.cart.filter((item) => item.id !== action.payload && item),
      };
  }
};

export default reducer;
