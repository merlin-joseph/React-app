import {
    //  useLocation,
     useParams 
    } from "react-router-dom";
import {useContext} from 'react';
import { BooksContext} from '../Contexts/BooksContext';
import React from "react";
import { Link } from 'react-router-dom';


export function Detail(){
    // const location = useLocation();
    // const data = location.state?.data;

    const params = useParams();
    const bookId = params.id;

    const [Books, setBooks] = useContext(BooksContext);
    let book = Books.find((book) => book.id == bookId);

    const addBooks = () =>{
        
    }

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
                <button >-</button>
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