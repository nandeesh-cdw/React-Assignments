export interface MODELS {
    HomeCardCategory:{
        photo: string;
        id:string;
        description:string;
        button_label:string;
    }
}
export interface Product {
    id: string;
    name: string;
    photo: string;
    guarantee: number;
    rating: number;
    price: number;
    description: string;
    quantity?: number;
}
export interface CartItemProp {
    product: Product;
    isCartItem?: boolean;
    isWishlistItem?: boolean;
    addToCart?:any;
    onDecrement?:any;
    onIncrement?:any;

}
export interface BasketProp {
    cartItems: Array<Object>;
    wishlistItems: Array<Object>;
    categorySelected: string;
    onDecrement: any;
    onIncrement: any;
    onClickCart: any;
    onCategorySelection: any;
    onPlaceOrder: any;
}
export interface ButtonProp {
    onClick: any;
    isDisabled?: boolean;
    label: string;
    isWishlist?: boolean;
    isSelected?: boolean;
    isCategoryList?: boolean;
    isItemCounter?: boolean;
    isPlaceOrder?: boolean;
    isItem?: boolean;
}
export interface FurnitureCardProp {
    product: Product;
    productType?: string;
    onClickWishlist?: any;
    onAddToCart?: any;
    isOrderedItem?: boolean;
}
export interface Category{
    id: string;
    photo: string;
    description: string;
}
export interface HomeCardProps {
    category:Category;
}