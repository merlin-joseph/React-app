

export function  Card({book, addBooks, removeBooks}) {
    return (

        <div className="card" >
            <div className="text-center">
            <img src= {book.url} alt={book.name}/>
            <h4>{book.name}</h4>
            </div>
            <div className="button-wrapper d-flex">
            <p className="qty">Quantity: {book.quantity}</p>
            <div>
                <button onClick={(event) => addBooks(event,book)}>+</button>
                <button onClick={(event) =>removeBooks(event,book)}>-</button>
                </div>
            </div>
        </div>
    );
}