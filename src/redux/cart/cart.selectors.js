import { createSelector } from 'reselect';
//input ve output selector olarak ikiye ayrılır

//Bütün state'i dönmek yerine sadece cartı dönmüş oluruz.
const selectCart = state => state.cart;


//böyle kullanarak memoized yaptıkç
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
        0
      )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + (cartItem.quantity * cartItem.price),
        0
      )
)