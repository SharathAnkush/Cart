import React from 'react'
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row
} from "reactstrap";

function Cart({CartItem,Buy,remove}) {
    let price = 0;
    
    CartItem.map(item => {
    price = parseFloat(price) +  (item.proprice)
    }) 
    return (
      <Container fluid>
        <h1 className="text-success">Your Cart</h1>
        <ListGroup>
          {CartItem.map(item => (
            <ListGroupItem key={item.id}>
              <Row>
                <Col>
                  <img height={80} src={item.tinyImg} />
                </Col>
                <Col className="text-center">
                  <div className="text-primary">{item.proname}</div>
                  <span>price : {item.proprice}</span>
                  <Button color="danger" ml={1} onClick={() => remove(item)}>
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* If everything is empty */}
        {CartItem.length >= 1 ? (
          <Card className="text-center mt-3">
            <CardHeader>Grand Total</CardHeader>
            <CardBody>
              Your amount for {CartItem.length} product is {price}
            </CardBody>
            <CardFooter>
              <Button color="success" onClick={Buy}>
                pay here
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <h1 className="text-warning">Cart is empty</h1>
        )}
      </Container>
    );
  };
  
export default Cart;