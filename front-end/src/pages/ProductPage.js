import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';

function ProductPage(props) {

    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, []);

    const handleAddToCart = () => {
        props.history.push("/cart/" +  props.match.params.id + "?qty=" + qty)
    }

    return <div>
        <div className='go-back-to-result'> 
    <Link to='/' > Go Back to All products</Link>
</div>
{loading? <div>Loading...</div>:
error? <div> {error} </div>:
(
    <div className="details">
    <div className="details-image">
        <img src={product.Image} alt='product'></img>
    </div>
    <div className='details-info'>
        <ul>
            <li>
            <h4>{product.name}</h4>
            </li>
            <li>
            <h4>{product.rating} Starts ({product.NumReviews} Reviews)</h4>
            </li>
            <li>
           Price:  <b>£{product.price}</b>
            </li>
            <li>
Description:
<div>
 {product.description}
</div>

            <h4>{product.description}</h4>
            </li>
        </ul>
    </div>
    <div className='details-action'>
        <ul>
            <li>
                Price: {product.price}
            </li>
            <li>
                Status: {product.countInStock > 0? "In Stock": "" }
            </li>
            <li>
                Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                    {[...Array(product.countInStock).keys()].map(x=>
                        <option key={x + 1} value ={x+1}> {x+1} </option> )} 
                </select>
            </li>
            <li>
                {product.countInStock > 0 && <button onClick={handleAddToCart} className='button primary'> Add to Trolley </button>
}
           </li>
        </ul>
    </div>
    </div>
)
}
  
       </div>
}
export default ProductPage;