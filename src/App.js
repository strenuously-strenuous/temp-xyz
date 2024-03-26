import Product from './Product.js'
import Div from './Div.js'
import Header from './Header.js'
import { Routes, Route } from 'react-router-dom';

function App({text, color}) {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Div children={'home page'} />} />
        <Route path='/contact' element={<Div children={'contact page'} />} />
        <Route path='/product' element={<Product  />} />
      </Routes>
      <Header />
    </>
    
  );
}

export default App;
