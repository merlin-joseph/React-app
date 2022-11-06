import {Card} from '../Components/Card'
import { Link } from 'react-router-dom';
import CartContext from '../Contexts/CartContext'
import React, { useState } from 'react';

export function  Home() {
    const [books, setBookState] = useState(Books);
    const [totalItems, setCartState] = useState(0)
    
    const removeBooks = (event,book) => {
        event.preventDefault();
        let updatedBook = books.findIndex((b) =>  b.id === book.id);
        books[updatedBook].quantity--
        setBookState([...books]);
        setCartState(totalItems-1);

        
    }
    const addBooks = (event,book)=>{
        event.preventDefault();
        let updatedBook = books.findIndex((b) =>  b.id === book.id )
        books[updatedBook].quantity++
        setBookState([ ...books]);
        setCartState(totalItems + 1);

    }

    return (
        <div>       
            <CartContext.Provider value={totalItems}>
            <div className="d-flex list">
                {books.map((book)=>{
                return  (
                 <Link to={`/detail/${book.id}`} state={{data:book}}>
                     <Card  book={book} removeBooks = {removeBooks}  addBooks= {addBooks}  />
                </Link>
                )
                })}
            </div>
            </CartContext.Provider>
        </div>
    );
}
const Books = [
{
    id:1,
    title : 'The secret',
    quantity: 0,
    url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEqrd3Tw-4NWekjpApMRIRxlrGLa8UPCFhRw&usqp=CAU'
},
{
    id:2,
    title : 'It Starts with Us',
    quantity: 0,
    url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CVLei4RDVsE7hJoge-VRZ8RBQgYUvkySMw&usqp=CAU'
},
{
    id:3,
    title:'Atomi Habits',
    quantity: 0,
    url : 'https://assets2.cbsnewsstatic.com/hub/i/2021/10/21/6ab6b381-fb6d-480d-a5a7-1e1af08b9077/atomic-habits.jpg'
},
{
    title:'The Hobbit',
    quantity: 0,
    url : 'https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/The-Hobbit-book-cover.jpg'
}
];