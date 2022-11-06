import './App.css';
import { Routes, Route,BrowserRouter } from "react-router-dom"
import {Home} from './Pages/Home'
import {Header} from './Components/Header'
import {Detail} from './Components/Detail'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/detail/:id" name="detail" element={ <Detail/> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
