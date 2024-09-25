import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "../components/Navbar.css"


function Navbar() {
    const selector = useSelector(state => state.cart.cartItems)
  return (
    <>
    <div className="d-flex justify-content-center gap-5 m-5">
        <h6><Link style={{textDecoration :'none'}} to="">All Products</Link></h6>
        <h6>
        {selector.length > 0 && (
                        <Link style={{ textDecoration: 'none', position: 'relative' }} 
                            to={`SingleProduct/${selector[0].id}`}>
                            Single Product
                            <span style={{ position: 'relative' }}>
                                <i className="fa-solid fa-cart-plus"></i>
                                <span className="cart-count">{selector.length}</span>
                            </span>
                        </Link>
                    )}
</h6>
    </div>
    </>
  )
}

export default Navbar
