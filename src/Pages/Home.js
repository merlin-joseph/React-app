import { Link } from 'react-router-dom';
import React, { useContext, useState,useEffect } from 'react';
import axios from "axios";
import {Card} from '../Components/Card'
import { BooksContext} from '../Contexts/BooksContext';
import {CartContext} from '../Contexts/CartContext'


const baseURL = "https://localhost:7266/api/Course";

export function  Home() {
  const [books, setBookState] = useState([]);
  const [cartDetails, setCartDetails] = useContext(CartContext);
  const [Books, setBooks] = useContext(BooksContext);

  const removeBooks = (event,book) => {
    event.preventDefault();
    let id = Books.findIndex((b) =>  b.id === book.id);
    if(Books[id].quantity){
      let data = {...book, quantity: book.quantity-1}
        //update selected book - put
      axios.put(baseURL, data ).then((response) => {
        let book = response.data.data;
        setCartDetails(cartDetails - 1);
          // fetch list api - get
        getAllBooks();
      }).catch (error =>  console.log(error))
    }
  }
  const addBooks = (event,book)=>{
    event.preventDefault();
    let data = {...book, quantity: book.quantity+1}
    //update selected book - put
    axios.put(baseURL, data ).then((response) => {
      let book = response.data.data;
      setCartDetails(cartDetails + 1);
      // fetch list api - get
      getAllBooks();
    }).catch (error =>  console.log(error))
  }

  const getAllBooks = () =>{
    axios.get(baseURL).then((response) => {
      let books = response.data.data;
      let cart = books.reduce((cart, book) => {return cart+book.quantity},0);
      setCartDetails(cart);
      setBooks(books);
    }).catch (error =>  console.log(error))
  }
    
  useEffect(() => {
    getAllBooks();
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