import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button } from "../../components/button/Button"
import { Context } from "../../context/Context"
import './Product.css'

export function Product() {
    const params = useParams()
    const [product, setProduct] = useState([])
    const { valueVasket, setBalueVasket } = useContext(Context);

    const addToBasket = (product) => {
        setBalueVasket([...valueVasket, product])
    }

    useEffect(() => {
        getProduct()
    })
    const getProduct = async () => {
        const res = await fetch('https://fakestoreapi.com/products/' + params.id)
        const data = await res.json()
        setProduct(data)
    }

    return (
        <>
            {product?.title ? <div className="product">
                <div className="box-product-img">
                    <img className="product-img" src={product.image} />
                </div>
                <div className="product-data">
                    <h1 className="product-title">{product.title}</h1>
                    <span className="product-price">{product.price} $</span>
                    <p className="product-description">{product.description}</p>
                    <Button functionClick={() => addToBasket(product)} title="ADD TO BASKET" changeStyle={{ width: '100%' }} />
                </div>
            </div> : <h1 className="product-title-not-found">Not found product...</h1>}
        </>
    )
}