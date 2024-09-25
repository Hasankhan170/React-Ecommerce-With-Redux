import { useEffect } from "react"
import { useState } from "react"
import { Button, Card } from "react-bootstrap";


function App() {

    const [products,setProducts] = useState(null)

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res =>{
            setProducts(res.products)
        })
        .catch(err => console.log(err));
    },[])
  return (
    <>
   <div className="container d-flex flex-wrap justify-content-center gap-5 mt-5">
   { products ? products.map((item)=>{
            return <div key={item.id}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.title.slice(0,10) + '...'}</Card.Title>
        <Card.Text>{item.description.slice(0,40) + '...'}</Card.Text>
        <Button variant="primary">ADD TO CART</Button>
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
