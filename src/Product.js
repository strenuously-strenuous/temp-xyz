import { useState } from "react";
import Div from "./Div";

function Product() {
  let [products, setProducts] = useState([
    {id: '1', name: 'Product 1', description: 'some shoes', price: 100},
    {id: '23', name: 'Product 2', description: 'some shoes', price: 100},
    {id: '10', name: 'Product 3', description: 'furniture', price: 100},
    {id: '111', name: 'Product 4', description: 'some shirt', price: 100},
  ])

  let [cart, setCart] = useState([])
  
  let options = {
    width: '300px',
  }

  function addToCart(id) {
    let f = products.filter(product => product.id === id)
    console.log(f)
    setCart(f)
  }

  function search(e) {
    console.log(e.target.value)
    let searchTerm = (e.target.value).toLowerCase()
    console.log(searchTerm)

    let pattern = new RegExp(searchTerm)

    let searchProducts = products.filter(product => pattern.test(product.name) || pattern.test(product.description))
    console.log(searchProducts)
  }
  
  
  
  return ( 
    <>
    <Div>
      <input placeholder="Search..." onChange={(e) => search(e)} />
    </Div>
    <Div>
      {products.length + ' Products found'}
      {products.map((singleProduct) => (
        <div class="card" style={options}>
        <img class="card-img-top" src="https://via.placeholder.com/300?text=Products" 
        alt="Title" />
        <div className={`card-body`}>
          <h4 class="card-title">{singleProduct.name}</h4>
          <p class="card-text">{singleProduct.description}</p>
          <button className="btn btn-primary"
          onClick={() => addToCart(singleProduct.id)}
          >Add to Cart</button>
        </div>
      </div>
      ))}
        {'Showing All of ' + products.length + ' Products'}

      {cart ? cart.length : 'cart is empty'}
    </Div>
    </>
   );
}

export default Product;