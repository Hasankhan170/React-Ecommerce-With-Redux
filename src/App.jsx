import { useEffect } from "react"
import { useState } from "react"
import { Button, Card } from "react-bootstrap";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";

import { addCartItem, removeCartItem } from "./feature/carts/cartSlice";
import { Outlet, useLocation, useNavigate } from "react-router-dom";


function App() {

    const [products,setProducts] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation();
    const selector = useSelector(state => state.cart.cartItems)

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res =>{
            setProducts(res.products)
        })
        .catch(err => console.log(err));
    },[])

    const addToCart = (item) => {
        dispatch(addCartItem({ item }));
        console.log("Adding to cart:", item);
        navigate(`/SingleProduct/${item.id}`);
    };
    
    const removeToCart = (item) => {
        if (!selector.length || !selector.find(cartItem => cartItem.id === item.id)) {
            alert("You can't remove an item that is not in the cart");
            return; 
        }
        dispatch(removeCartItem({ item }));
        console.log("removing to cart:", item);
        navigate(`/SingleProduct/${item.id}`);
    };
    return (
        <>
            <Navbar />
            <div className="container d-flex flex-wrap justify-content-center gap-5 mt-5">
                {location.pathname !== `/SingleProduct/${products?.[0]?.id}` ? (
                    products ? products.map((item) => {
                        return (
                            <div key={item.id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.thumbnail} />
                                    <Card.Body>
                                        <Card.Title>{item.title.slice(0, 10) + '...'}</Card.Title>
                                        <Card.Text>{item.description.slice(0, 40) + '...'}</Card.Text>
                                        <Button className="m-2" style={{ width: '100%' }} onClick={() => addToCart(item)} variant="primary">ADD TO CART</Button>
                                        <Button className="m-2" style={{ width: '100%' }} onClick={() => removeToCart(item)} variant="danger">Remove Item</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    }) : <h2>No data found</h2>
                ) : (
                    <Outlet /> 
                )}
            </div>
        </>
    );
}

export default App
