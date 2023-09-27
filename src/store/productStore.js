import { create } from "zustand";

const useProductStore = create((set) => ({
    productList: [],
    initialLoading: true,
    fetch: async () => {
        try {
            const response = await fetch('http://localhost:3000/api/products');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            set({ productList: data , initialLoading: false});
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}));

export default useProductStore;