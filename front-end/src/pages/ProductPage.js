import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductPage(props) {
    console.log(props.match.params.id)
    const product = data.products.find(x=> x._id === props.match.params.id);
    return <div>
        <div className='go-back-to-result'> 
    <Link to="/" > Go Back to All products</Link>
</div>
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
                   Status: {product.price}
               </li>
               <li>
                   Quantity: <select>
                       <option> 1  </option>
                       <option>  2 </option>
                       <option>   3</option>
                       <option>   4</option>
                   </select>
               </li>
               <li>
                   <button className='button'> Add to Trolley </button>
               </li>
           </ul>
       </div>
       </div>
       </div>
}
export default ProductPage;