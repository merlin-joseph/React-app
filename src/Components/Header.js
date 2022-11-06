
import React, { useContext } from "react";
import CartContext from '../Contexts/CartContext'

export function Header(){
    const value = useContext(CartContext);

    return (
        <header>
            <p>{value}</p>
        </header>
    )
}