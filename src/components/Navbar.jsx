// import { useSelector } from "react-redux"
// import { Link } from "react-router-dom"
// import "../components/Navbar.css"

// import { Link } from "react-router-dom"


// function Navbar() {
//     const selector = useSelector(state => state.cart.cartItems)
//   return (
//     <>
//     <div className="d-flex justify-content-center gap-5 m-5">
//         <h6><Link style={{textDecoration :'none'}} to="">All Products</Link></h6>
//         <h6>
//   <Link style={{ textDecoration: 'none', position: 'relative' }} to={`/SingleProduct/${selector[0]?.id}`}>
//     Single Product
//     <span style={{ position: 'relative' }}>
//       <i className="fa-solid fa-cart-plus"></i>
//       {selector.length > 0 && (
//         <span className="cart-count">{selector.length}</span>
//       )}
//     </span>
//   </Link>
// </h6>
//     </div>
//     </>
//   )
// }

// export default Navbar




// function Navbar() {
//   return (
//     <>
//     <Link to= "SingleProduct">SingleProduct</Link>
//     </>
//   )
// }

// export default Navbar

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const selector = useSelector((state) => state.cart.cartItems);

  const styles = {
    navContainer: {
      display: "flex",
      justifyContent: "center", 
      alignItems: "center",
      padding: "20px",
      boxShadow: "0 0 10px grey",
    },
    linkStyle: {
      textDecoration: "none",
      fontSize: "18px",
      color: "black",
      marginRight: "20px",
    },
    cartLink: {
      textDecoration: "none",
      position: "relative",
      display: "inline-block",
      color: "black",
    },
    cartIcon: {
      fontSize: "20px",
      marginLeft: "8px",
      color : 'blue'
    },
    counter: {
      position: "absolute",
      top: "-8px",
      right: "-12px",
      backgroundColor: "red",
      color: "white",
      borderRadius: "50%",
      padding: "2px 6px",
      fontSize: "12px",
      fontWeight: "bold",
      minWidth: "18px",
      textAlign: "center",
      zIndex: 1,
    },
  };

  return (
    <div style={styles.navContainer}>
      <Link style={styles.linkStyle} to="/">
        All Products
      </Link>
      <Link to="/" style={styles.cartLink}>
        Single Product
        <i className="fa-solid fa-cart-shopping" style={styles.cartIcon}></i>
        <span style={styles.counter}>{selector.length}</span>
      </Link>
    </div>
  );
}

export default Navbar;
