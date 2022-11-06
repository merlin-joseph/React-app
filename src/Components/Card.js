

export function  Card({book, addBooks, removeBooks}) {
    return (

        <div className="card" >
            <img src= {book.url} alt={book.title}/>
            <h4>{book.title}</h4>
            <p className="qty">Quantity: {book.quantity}</p>
            <div className="button-wrapper">
                <button onClick={(event) => addBooks(event,book)}>+</button>
                <button onClick={(event) =>removeBooks(event,book)}>-</button>
            </div>
        </div>
    );
}