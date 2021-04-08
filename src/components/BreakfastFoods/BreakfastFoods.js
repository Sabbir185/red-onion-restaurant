import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './BreakfastFood.css'


const BreakfastFoods = (props) => {
    const {name, title, url, price} = props.items;


    return (
        <div className='mt-3 food-card'>
            <Card style={{ width: '18rem' }}>
                <div className='img-div'>
                    <Card.Img variant="top" src={url} className='img-food'/>
                </div>
                <Card.Body>
                    <Card.Text> <p>{name}</p> </Card.Text>
                    <Card.Text> {title} </Card.Text>
                    <Card.Text> <h6>Price : ${price}</h6> </Card.Text>
                    <div className='d-flex justify-content-end'>
                        <Button variant="primary" size="sm" className='mr-2'>Add Cart</Button>
                        <Button variant="primary" size="sm">Buy Now</Button>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default BreakfastFoods;