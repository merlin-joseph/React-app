import {Card} from '../Components/Card'
import { Link } from 'react-router-dom';
import {CartContext} from '../Contexts/CartContext'
import React, { useContext, useState,useEffect } from 'react';
import axios from "axios";
import { BooksContext} from '../Contexts/BooksContext';

const baseURL = "https://localhost:7266/api/Course";

export function  Home() {
    const [books, setBookState] = useState([]);
    const [cartDetails, setCartDetails] = useContext(CartContext);
    const [Books, setBooks] = useContext(BooksContext);

    
    const removeBooks = (event,book) => {
        event.preventDefault();
        let updatedBook = books.findIndex((b) =>  b.id === book.id);
        if(Books[updatedBook].quantity){
            Books[updatedBook].quantity--
            setBooks([...books]);
            setCartDetails(cartDetails-1);
        }
       

        
    }
    const addBooks = (event,book)=>{
        event.preventDefault();
        let updatedBook = Books.findIndex((b) =>  b.id === book.id )
        Books[updatedBook].quantity++
        setBooks([ ...Books]);
        setCartDetails(cartDetails + 1);

    }

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setBooks(response.data.data);
        }).catch (error =>  console.log(error))
      }, []);

    return (
        <div>       
            <div className="d-flex list">
                {Books.map((book)=>{
                return  (
                 <Link to={`/detail/${book.id}`} state={{data:book}} key={book.id}>
                     <Card  book={book} removeBooks = {removeBooks}  addBooks= {addBooks}  />
                </Link>
                )
                })}
            </div>
        </div>
    );
}