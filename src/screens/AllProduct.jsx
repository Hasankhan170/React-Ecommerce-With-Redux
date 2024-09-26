import { useEffect } from "react"
import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addItem} from "../config/redux/reducer/cartSlice"
import { useNavigate } from "react-router-dom"



function AllProducts() {

    const [products,setProducts] = useState(null)
    const selector = useSelector(state=> state.cart.cartItems)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(selector);
    

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        console.log(res);  //for testing purpose, remove in production
        setProducts(res.products)
      })
      .catch(err => console.log(err))
    },[])

    const addToCart = (item)=>{
        dispatch(addItem(item))
        navigate(`/SingleProduct/${item.id}`); // navigate to single product page with product id as parameter  // remove in production environment
    }
    // const removeToCart = (item)=>{
    //     // const isSelector = selector.find(cartItem=> cartItem.id === item.id)
    //     // if(!isSelector){
    //     //     console.log('Not in cart');
    //     //     return;  
    //     // }
    //     dispatch(removeItem(item.id))  
    // }
    return (
        <>
          <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
            {products ? products.map((item) => {
              return (
                <Card key={item.id} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.thumbnail} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0,10) + '...'}</Card.Title>
                    <Card.Text>{item.description.slice(0,20) + '...'}</Card.Text>
                    <Button className = "mb-2" style={{width: '100%'}} onClick={()=>addToCart(item)} variant="primary">Add to Cart</Button>
                    {/* <Button style={{width: '100%'}} onClick={()=>removeToCart(item)} variant="danger" disabled={!selector.find(cartItem => cartItem.id === item.id)}>Remove to Cart</Button> */}
                  </Card.Body>
                </Card>
              );
            }) : <h1>Loading...</h1>}
          </div>
        </>
      );
}

export default AllProducts