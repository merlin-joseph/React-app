import { createContext,useState } from "react";

 const BooksContext = createContext();

 const  BooksProvider = (props) => {
    const [Books, setBooks] = useState([]);
    return (
        <BooksContext.Provider value={[Books, setBooks]}>
            {props.children}
        </BooksContext.Provider>
    );
};

export { BooksProvider, BooksContext}
