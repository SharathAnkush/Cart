import React,{useState} from 'react'
import BuyPage from './components/BuyPage'
import Cart from './components/Cart'
import HeaderNav from '../src/Header/HeaderNav'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Container,Col,Row} from 'reactstrap'


function App() {
  const [ cart, setCart ] = useState([]);
 
 //methods
 //checking the buyitem is already in cart or not

const addInCart = (item) => {
  const alreadyInCart = cart.findIndex(array => array.id === item.id)
  
  if(alreadyInCart !== - 1){
     toast('already in cart',{type : 'error'})
     return;
  }

  setCart([...cart,item])

}
//Buy method
const Buy = () => {
 setCart([]);
 toast('Purchase Complete',{type : 'success'})
}

//remove from cart
const Remove = (item) =>{
 setCart(cart.filter(single => single.id !== item.id))
}


  return (
    <>
    
    <Container fluid>
      <ToastContainer/>
      <Row >
        <Col md='8'>
        <BuyPage addInCart={addInCart} className="Buypage"/>
        </Col>
        <Col md='4'>
        <Cart CartItem={cart} Buy={Buy} remove={Remove} className="cartpage"/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
