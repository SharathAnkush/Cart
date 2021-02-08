import React,{useState} from 'react'

function App() {
  const [ cart, setCart ] = useState([])
 
 //methods
 //checking the buyitem is already in cart or not

const addInCart = (item) => {
  const alreadyInCart = cart.findIndex(array => array.id === item.id)
  
  if(alreadyInCart !== -1){
     alert('already in cart')
  }

  setCart([...cart,item])

}
//Buy method
const Buy = () => {
 setCart([]);
 alert('added in cart')
}

//remove from cart
const Remove = () =>{
 setCart(cart.findIndex(single => single.id !== item.id))
}


  return (
    <div className="App">
      <h1>cart</h1>
    </div>
  );
}

export default App;
