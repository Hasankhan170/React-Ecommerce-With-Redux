import { useSelector } from "react-redux"


function Navbar() {
    const selector = useSelector(state => state.cart.cartItems)
  return (
    <>
    <div className="d-flex justify-content-center gap-5 m-5">
    <h6>All products</h6>
    <h6>Single Products {selector.length}</h6>
    </div>
    </>
  )
}

export default Navbar
