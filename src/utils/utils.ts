

export const addItemstoCart = (product: any) => {
    const storedCart = localStorage.getItem('userCart');
    const userCart = storedCart ? JSON.parse(storedCart) : []; // Initialize as empty array if null or undefined
    
    let itemIndex = userCart.findIndex(item => item.id === product.id);

    const updatedCart = itemIndex === -1
        ? [...userCart, { ...product, quantity: 1 }]
        : userCart.map((item: any, i: number) => i === itemIndex ? { ...item, quantity: item.quantity + 1 } : item);
    
    localStorage.setItem('userCart', JSON.stringify(updatedCart));
    return updatedCart;
}
export const addItemsToWishlist = (product: any) => {
    const userWishlist = JSON.parse(localStorage.getItem('userWishlist') || '[]') as any[];
    const index = userWishlist.findIndex(item => item.id === product.id);
        
    const updatedWishlist = index === -1
        ? [...userWishlist, product]
        : [...userWishlist ]

    localStorage.setItem('userWishlist', JSON.stringify(updatedWishlist));
    return updatedWishlist;

}
export const removeWishlistItem = (product: any) => {
    const userWishlist = JSON.parse(localStorage.getItem('userWishlist') || '[]') as any[];
    const updatedWishlist = userWishlist.filter(item => item.id !== product.id);
    localStorage.setItem('userWishlist', JSON.stringify(updatedWishlist));
    return updatedWishlist;
}
export const formatPriceToINR = (price: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' , maximumFractionDigits:0}).format(price);
};

export const getOrderedItems = () => {
    const orderedItems = JSON.parse(localStorage.getItem('orderItems') || '[]') as any[];
    return orderedItems;
}
export const removeOrderItems = () => {
    localStorage.removeItem('orderItems');
}