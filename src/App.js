import './App.css';
import { Routes, Route,BrowserRouter } from "react-router-dom"
import {Home} from './Pages/Home';
import {Header} from './Components/Header';
import {Login} from './Pages/Login';
import {Detail} from './Components/Detail';
import {CartDetailsProvider} from './Contexts/CartContext';
import {BooksProvider} from './Contexts/BooksContext';

function App() {
  return (
    <div className="App">
      <CartDetailsProvider>
        <Header />
        <BooksProvider>
          <BrowserRouter>
            <Routes>
            <Route path="/" element={ <Login/> } />
              <Route path="/Products" element={ <Home/> } />
              <Route path="/detail/:id" name="detail" element={ <Detail/> } />
            </Routes>
          </BrowserRouter>
        </BooksProvider>
      </CartDetailsProvider>
    </div>
  );
}

export default App;
