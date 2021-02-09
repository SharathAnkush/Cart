import React from 'react'
import '../style.css'


function Cart({CartItem,Buy,remove}) {
    let price = 0;
    
    CartItem.map(item => {
        price = parseFloat(price) +  (item.proprice)
    }) 

    return (
        <div className="cartpage" >
            <h3>Cart Page</h3>
          
            {CartItem.map((item) => (
                <div key={item.id} className="sigcart">
                 <img src={item.tinyImg} />
                 <h4>name : {item.proname}</h4>
                <h4>price : {item.proprice}</h4>
                <button onClick={() => remove(item)}>Remove</button>
                </div>
            ))}
            {CartItem.length >= 1 ? 
                <div>
                  <h3>selectItem : {CartItem.length}</h3>
                  <h3>total :{price}</h3>
                  <button onClick={() => Buy}>pay</button>
                </div>
             :<h1>cart is emty</h1>}
        </div>
    )
}
export default Cart;