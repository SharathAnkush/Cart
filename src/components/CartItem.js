import React from 'react'
import {CardBody,Card,CardText,CardImg,CardTitle,Button} from 'reactstrap'

export default function CartItem({product, addInCart}) {
    return (
        <Card className='mt-2 mb-1'>
        <CardImg top width='100%'height="170" src={product.tinyImg}/>
        <CardBody className="text-center">
          <CardTitle className="secondary">{product.proname}</CardTitle>
          <CardText >price : {product.proprice}</CardText>
          <Button ton onClick={()=>addInCart(product)} color='success'>Buy Now</Button>
        </CardBody>
      </Card>
    )
}
