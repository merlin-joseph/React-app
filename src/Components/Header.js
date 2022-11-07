
import React, { useContext } from "react";
import {CartContext} from '../Contexts/CartContext'

export function Header(){
    const [cartDetails] = useContext(CartContext);
    return (
        <header>
            <p>{cartDetails}</p>
        </header>
    )
}