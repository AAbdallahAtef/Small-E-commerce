import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
    let product  = props.product;
    
  return (
    <div className="card text-bg-info h-100 " >
    <img src={product.image} className={`card-img-top ${props.showButton ? 'height-200' : 'height-500'}`} alt={product.title} />
    <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
         {product.description}
        </p>
        {props.showButton&&<Link to={`product/${product.id}`} className="btn btn-primary">Details</Link>}
        {(!props.showButton)&&<p> {product.category}</p>}
        {(!props.showButton)&&<p> {product.price}$</p>}
    </div>
  </div>
  );
};

export default Product;
