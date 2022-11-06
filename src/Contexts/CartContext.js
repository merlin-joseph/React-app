import { createContext,useState } from "react";

 const CartContext = createContext();

 const  CartDetailsProvider = (props) => {
    const [cartDetails, setCartDetails] = useState(0);

    return (
        <CartContext.Provider value={[cartDetails, setCartDetails]}>
            {props.children}
        </CartContext.Provider>
    );
};


export { CartDetailsProvider, CartContext}
