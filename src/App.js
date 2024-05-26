import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductList from './components/ProductList';
import {Routes, Route} from 'react-router-dom'
import About from './components/About';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div className="App bg-dark">
      <Navbar/>
      <Routes>
        <Route 
          path='/' 
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route path='about' element={<><About/></>}/>
        <Route path='product/:productId' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
