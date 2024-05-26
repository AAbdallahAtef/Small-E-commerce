import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    let params = useParams()
    let [product,setProduct] = useState({}) 
    let api_url = "https://fakestoreapi.com/products";
    useEffect( ()=>{
        axios.get(`${api_url}/${params.productId}`)
        .then(
            (response)=>setProduct(response.data)
        )
        .catch(
            (error)=>console.log(error)
        )
    },[])
    return (
        <div>
            <h1 className='text-warning py-4'>Product Details</h1>
            <div className='container pb-4'>
                <Product key ={product.id} product={product} showButton ={false}></Product>
            </div>
        </div>
    );
}

export default ProductDetails;
