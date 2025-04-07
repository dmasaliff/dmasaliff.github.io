/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Button from '../components/Button' 
import {useDispatch} from "react-redux"
import { addToCart } from '../redux/slices/cartSlice'

function CardProduct({children}) {
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow my-2 mx-2">
            {children}
        </div>
    )
}

function Header(props) {
    return (
        <Link to={`/product/${props.id}`}>
            <img 
            src={props.image}
            alt="product"
            className="p-8 rounded-t-lg h-60 w-full"
            />
        </Link>
    )
}

function Body({children, title}) {
    return (
    <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-white">{title.substring(0,20)} ...</h5>
        <p className="text-m text-white">
        {children.substring(0,100)} ...
        </p>
    </div>
    )
}

function Footer(props) {
    const dispatch = useDispatch();
    return(
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-3xl font-bold text-white pt-5 mr-2">
            {props.price.toLocaleString('us-US',{style: 'currency', currency: 'USD'})}
            </span>
            <Button button="Add To Cart" onClick={() => dispatch(addToCart({id: props.id, qty: 1}))}/>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct