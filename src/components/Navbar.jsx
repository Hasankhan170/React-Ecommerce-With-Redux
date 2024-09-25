import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


function Navbar() {
    const selector = useSelector(state => state.cart.cartItems)
  return (
    <>
    <div className="d-flex justify-content-center gap-5 m-5">
        <h6><Link to="">All Products</Link></h6>
        <h6><Link to="SingleProduct">Single Product {selector.length}</Link></h6>
    </div>
    </>
  )
}

export default Navbar
