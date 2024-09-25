import { useEffect } from "react"
import { useState } from "react"
import { Button, Card } from "react-bootstrap";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";


function App() {

    const [products,setProducts] = useState(null)
    const dispatch = useDispatch()

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res =>{
            setProducts(res.products)
        })
        .catch(err => console.log(err));
    },[])

    const addToCart = (item)=>{
        alert(`Item Added : ${item.id}`)
        dispatch(addToCart(item))
    }
  return (
    <>
    <Navbar/>
   <div className="container d-flex flex-wrap justify-content-center gap-5 mt-5">
   { products ? products.map((item)=>{
            return <div key={item.id}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.title.slice(0,10) + '...'}</Card.Title>
        <Card.Text>{item.description.slice(0,40) + '...'}</Card.Text>
        <Button onClick={addToCart} variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>
  </div>
        }): <h2>No data found</h2>
    }
   </div>
    </>
  )
}

export default App
