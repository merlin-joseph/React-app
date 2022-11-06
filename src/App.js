import './App.css';
import { Routes, Route,BrowserRouter } from "react-router-dom"
import {Home} from './Pages/Home'
import {Header} from './Components/Header'
import {Detail} from './Components/Detail'
import {CartDetailsProvider} from './Contexts/CartContext'

function App() {
  return (
    <div className="App">
      <CartDetailsProvider>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/detail/:id" name="detail" element={ <Detail/> } />
      </Routes>
      </BrowserRouter>
      </CartDetailsProvider>
    </div>
  );
}

export default App;
