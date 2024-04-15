import React, { useEffect, useState } from 'react'
import styles from './Shopping.module.scss';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import FurnitureCard from '../../components/FurnitureCard/FurnitureCard';
import Basket from '../../components/Basket/Basket';
import { addItemstoCart , addItemsToWishlist, getOrderedItems, removeWishlistItem } from '../../utils/utils'
import { Product } from '../../models/models';
function Shopping() {
    console.log("shopping rendered");
    const navigate = useNavigate();
    const { categoryId } = useParams();
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([{}]);
    const [wishlist, setWishlist] = useState([{}]);
    const [category, setCategory] = useState("wishlist");
    useEffect(() => {
        // setCartItems([{}]);
        setLoading(true);
        try {
            axios.get(`https://jsonmockserver.vercel.app/api/shopping/furniture/products?category=${categoryId}`).then(response => {
                setProductData(response.data);
                setLoading(false); 
            })
        } catch (error) {
            console.log(error);
            setLoading(false); 
        }
        const storedCart = JSON.parse(localStorage.getItem('userCart') || '[]');
        const storedWishlist = JSON.parse(localStorage.getItem('userWishlist') || '[]');
        setCartItems(storedCart);
        setWishlist(storedWishlist);
    },[categoryId,]);

    const addToWishlist = (product:Product) => {
        setWishlist(addItemsToWishlist(product));
        setCategory('wishlist');
    };
    
    const addToCart = (product:Product) => {
        setCartItems(addItemstoCart(product));
        setCategory('cart');
    }

    const onDecrement = (product: Product) => {
        const userCart = JSON.parse(localStorage.getItem('userCart') || '[]') as any[];
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
        setCartItems(updatedCart);
    }     
    const onIncrement = (product:Product) => {
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
        setCartItems(updatedCart);
    }

    const onAddFromWishlist = (product:Product) => {
        setCartItems(addItemstoCart(product));
        setWishlist(removeWishlistItem(product));
        setCategory('cart');
    }
    const onCategorySelected = (category:string) => {
        setCategory(category);
    }

    const placeOrder = () => {
        const orderItems = cartItems;
        localStorage.setItem('orderItems', JSON.stringify(orderItems));
        localStorage.removeItem('userCart');
        navigate(`/confirmOrder`);
    }
  return (
        <div className={styles.container}>
            <div className={styles.catalog_section}>
                <div className={styles.product_section}>
                    {
                        loading ? (
                            <Spinner/>
                        ) : (
                            productData.map((product) => {
                               return <FurnitureCard product={product} productType='product' onClickWishlist={addToWishlist} onAddToCart={addToCart}/>
                            })
                        )
                    }
                </div>
            </div>
            {
                (cartItems.length > 0 || wishlist.length >0) && ( 
                <div className={styles.cart_section}>
                    <Basket cartItems={cartItems} wishlistItems={wishlist} 
                    categorySelected={category}
                    onDecrement={(product:Product)=> onDecrement(product)} 
                    onIncrement={(product:Product) => onIncrement(product)} 
                    onClickCart={(product:Product) => onAddFromWishlist(product)}
                    onCategorySelection={onCategorySelected}
                    onPlaceOrder={placeOrder}
                    />
                </div>)
            }
        </div>
    )
}

export default Shopping