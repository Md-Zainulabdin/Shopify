import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'

const cartStore = (set) => ({
    cart: [],
    addItem: (product) => {
        set((state) => ({
            cart: [product, ...state.cart],
        }))
    },
    removeItem: (cartId) => {
        set((state) => ({
            cart: state.cart.filter((prod) => prod.id !== cartId)
        }))
    },
});

const useCartStore = create(
    devtools(
        persist(cartStore, {
            name: "carts"
        })
    )
);

export default useCartStore;