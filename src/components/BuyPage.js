import axios from 'axios';
import {useState,useEffect} from 'react'
import {random, commerce} from 'faker'
import {Container,Col,Row } from 'reactstrap'
import CartItem from './CartItem'

const URL = 'https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json';

const BuyPage = ({addInCart}) => {
 const [products , setProducts] = useState([])
   
 const fetchPic = async () => {
     const {data} = await axios.get(URL)
     const {photos} = data 

 const allProductes = photos.map(photo => ({
     itemImg : photo.src.medium,
     tinyImg : photo.src.tiny,
     proname: random.word(),
     proprice : commerce.price(),
     id : random.uuid()
 }));
 
 setProducts(allProductes)

}; //fetch end

 useEffect(() => {
     fetchPic()
 }, [])
      
    return(
         <Container fluid>
             <Row>
               {products.map(( product ) =>(
                   <Col md={4} key={product.id}>
                     <CartItem product={product} addInCart={addInCart}/>
                   </Col>
                     
                   )
               )}
            </Row>
           </Container>

        //  <div className='singal' key={product.id}>
        //     <img src={product.tinyImg} style={{margin:'1rem', border:'2px solid black'}}/>
        //     <h4>Name : {product.proname}</h4>
        //     <h4>price : {product.proprice}</h4>
        //     <button onClick={() => {addInCart(product)}} className="select">Select</button>
        //  </div>             
      
    );
}

export default BuyPage ;