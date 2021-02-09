import React,{useState} from 'react'
import BuyPage from './components/BuyPage'
import Cart from './components/Cart'
import '../src/style.css'

function App() {
  const [ cart, setCart ] = useState([])
  console.log(cart)
 
 //methods
 //checking the buyitem is already in cart or not

const addInCart = (item) => {
  const alreadyInCart = cart.findIndex(array => array.id === item.id)
  
  if(alreadyInCart !== - 1){
     alert('already in cart')
     return;
  }

  setCart([...cart,item])

}
//Buy method
const Buy = () => {
 setCart([]);
 alert('added in cart')
}

//remove from cart
const Remove = (item) =>{
 setCart(cart.filter(single => single.id !== item.id))
}


  return (
    <div className="App">
      <div className="divbuy">
      <BuyPage addInCart={addInCart} className="Buypage"/>

      </div>
      
      <Cart CartItem={cart} Buy={Buy} remove={Remove} className="cartpage"/>
    </div>
  );
}

export default App;
