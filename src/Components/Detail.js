import {useParams } from "react-router-dom";
import { useState} from 'react';
import React, {useEffect,useContext} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import {CartContext} from '../Contexts/CartContext'

const baseURL = "https://localhost:7266/api/Course";

export function Detail(){
    // const location = useLocation();
    // const data = location.state?.data;
    const params = useParams();
    const bookId = params.id;
     // const [Books, setBooks] = useContext(BooksContext);
    // let book = Books.find((book) => book.id == bookId);

    const [book, setBook] = useState({});
    const [cartDetails, setCartDetails] = useContext(CartContext);

   
    const addBooks = () =>{
        let data = {...book, quantity: book.quantity+1}
        // update-book
        axios.put(baseURL, data ).then((response) => {
            let book = response.data.data;
            setBook(book);
            setCartDetails(cartDetails + 1);

        }).catch (error =>  console.log(error))
    }

    const removeBooks = () => {
        let data = {...book, quantity: book.quantity-1}
        //update book 
        axios.put(baseURL, data ).then((response) => {
            let book = response.data.data;
            setBook(book);
            setCartDetails(cartDetails - 1);

        }).catch (error =>  console.log(error))
    }

    useEffect(() => {
        // fetch book by id
        axios.get(`${baseURL}/${bookId}`).then((response) => {
            let book = response.data.data;
            setBook(book);
        }).catch (error =>  console.log(error))
      });

    if(book){
      return (
        <div className="details d-flex">
          <Link to = "/">Back</Link>
          <div>
              <img src= {book.url} alt={book.name} />
          </div>
          <div>
            <h1> {book.name}</h1>
            <p className="genre">{book.genre}</p>
            <p>{book.description}</p>
            <div className="button-wrapper d-flex">
              <p className="qty mr-10">Quantity: {book.quantity}</p>
              <div>
                <button onClick={addBooks} >+</button>
                <button onClick = {removeBooks}>-</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else {
        return (
            <div className="details"> Book not found</div>
        )
    }
   
}