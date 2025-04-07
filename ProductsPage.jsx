import {useState, useEffect } from "react";
import CardProduct from "../fragment/CardProduct"
import { getProducts } from "../services/product.service";
import TableCart from "../fragment/TableCart";

function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts(data => {
            setProducts(data);
        });
    },[]);

return (
    <div className="flex justify-center py-5" key={products.id}>
        <div className="w-3/4 flex flex-wrap">
        {products.length > 0 && 
            products.map(product => {
            return(
            <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id}/>
                <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id}></CardProduct.Footer>
            </CardProduct>
            )
        })}  
        </div>
        <div className="w1/4">
            <h1 className="text-3xl font-bold text-blue ml-5 mb-2">Cart</h1>
            <TableCart products={products}/>
        </div> 
    </div>
    )
}

export default ProductsPage