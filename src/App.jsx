import { useEffect } from "react"
import { useState } from "react"


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
    {
        products ? products.map((item)=>{
            return <div key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <button>Add to Cart</button>
                <hr />
            </div>
        }): <h2>No data found</h2>
    }
    </>
  )
}

export default App
