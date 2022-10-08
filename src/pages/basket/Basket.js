import { useContext } from "react";
import { Button } from "../../components/button/Button";
import { Context } from "../../context/Context";
import './Basket.css'

export function Basket() {
    const { valueVasket, setBalueVasket } = useContext(Context);
    const deleteBasket = (index) => {
        setBalueVasket(valueVasket.filter((item) => item.id !== product.id))
        // valueVasket.splice(index, 1)
        // setBalueVasket([...valueVasket])
    }
    return (
        <div className="basket">
            {valueVasket[0] ? valueVasket?.map((product, index) => (
                <div className="box-basket" key={product.id + index}>
                    <img className="basket-img" src={product.image} />
                    <h1 className="basket-title">{product.title.slice(0, 17)}</h1>
                    <Button title='DELETE' functionClick={() => deleteBasket(index)} />
                </div>
            )) : <h1 className="basket-title-not-found">Not  product in basket...</h1>}
        </div>
    )
}