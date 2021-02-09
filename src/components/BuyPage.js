import axios from 'axios';
import {useState,useEffect} from 'react'
import {random, commerce} from 'faker'
import '../style.css'

const URL = 'https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json';

const Buy = ({addInCart}) => {
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
 }))

 setProducts(allProductes)
};

 useEffect(() => {
     fetchPic()
 }, [])
      
    return(
        
        <div className="prodiv">
           {
                products.map(( product ) => { 
                    return (
                       
                            <div className='singal' key={product.id}>
                            <img src={product.tinyImg} style={{margin:'1rem', border:'2px solid black'}}/>
                            <h4>Name : {product.proname}</h4>
                             <h4>price : {product.proprice}</h4>
                             <button onClick={() => {addInCart(product)}} style={{backgroundColor:'#EDC126', color:'blackq'}}>Select</button>
                        </div>
                     
                    )
                })
                
            }
        </div>
    )
}

export default Buy ;