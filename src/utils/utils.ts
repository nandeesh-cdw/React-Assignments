

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
    const orderedItems = JSON.parse(localStorage.getItem('userCart') || '[]') as any[];
    setTimeout(() => {
        localStorage.removeItem('userCart');
    },1000)
    return orderedItems;
}
export const removeOrderItems = () => {
    localStorage.removeItem('orderItems');
}
export const getCartItems = () => {
    return JSON.parse(localStorage.getItem('userCart') || '[]');
}

export const getWishlistItems = () => {
    return JSON.parse(localStorage.getItem('userWishlist') || '[]');
}

export const decrementCartItem= (product) => {
    const userCart = getCartItems();
    const itemIndex = userCart.findIndex(item => item.id === product.id);
    
    const updatedCart = itemIndex === -1
        ? [...userCart, { ...product, quantity: 1 }]
        : userCart.map((item, i) => {
            if (i === itemIndex) {
                return item.quantity - 1 > 0 ? { ...item, quantity: item.quantity - 1 } : null;
            } else {
                return item;
            }
        }).filter(item => item !== null); 
    
    localStorage.setItem('userCart', JSON.stringify(updatedCart));
    return updatedCart;
}

export const incrementCartItem= (product) => {
    const userCart = JSON.parse(localStorage.getItem('userCart') || '[]') as any[];
    const itemIndex = userCart.findIndex(item => item.id === product.id)
    const updatedCart = itemIndex === -1
        ? [...userCart, { ...product, quantity: 1 }]
        : userCart.map((item, i) => {
            if (i === itemIndex) {
                if (item.quantity > 0) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return null; // Remove the item by returning null
                }
            } else {
                return item;
            }   
        })
        localStorage.setItem('userCart', JSON.stringify(updatedCart));
        return (updatedCart);
}