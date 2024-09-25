import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"


const SingleProduct = () => {
    const { id } = useParams();
    const cartItems = useSelector(state => state.cart.cartItems);
    const product = cartItems.find(item => item.id === parseInt(id));

    return (
        <>
            <div>
                <h1>Single Product Page {id}</h1>
                {product ? (
                    <div>
                        <h2>{product.title}</h2>
                        <img src={product.thumbnail} alt={product.title} />
                        <p>{product.description}</p>
                    </div>
                ) : (
                    <p>Product not found.</p>
                )}
            </div>
        </>
    );
};

export default SingleProduct;
