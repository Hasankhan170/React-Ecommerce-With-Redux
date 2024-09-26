// import { useSelector } from "react-redux"
// import { useParams } from "react-router-dom"


// const SingleProduct = () => {
//     const { id } = useParams();
//     const cartItems = useSelector(state => state.cart.cartItems);
//     const product = cartItems.find(item => item.id === parseInt(id));

//     return (
//         <>
//             <div>
//                 <h1>Single Product Page {id}</h1>
//                 {product ? (
//                     <div>
//                         <h2>{product.title}</h2>
//                         <img src={product.thumbnail} alt={product.title} />
//                         <p>{product.description}</p>
//                     </div>
//                 ) : (
//                     <p>Product not found.</p>
//                 )}
//             </div>
//         </>
//     );
// };

// export default SingleProduct;





// function SingleProduct() {
//   return (
//     <div>
//       <h1>single product</h1>
//     </div>
//   )
// }

// export default SingleProduct

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



function SingleProduct() {

  const { id } = useParams()
  const [arr,setArr] = useState([])
  console.log(id);
  useEffect(()=>{
    setArr(preArr => [...preArr ,id])
  },[id])
  
  
  return (
    <>
      <div>
        <h2>Product ID: {id}</h2>
        <ul>
          {arr.map((productId, index) => (
            <li key={index}>Product ID: {productId}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SingleProduct