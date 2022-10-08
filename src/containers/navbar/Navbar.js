import { useContext } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import "./Navbar.css"

export const Navbar = () => {
    const { valueVasket, setBalueVasket } = useContext(Context);
    return (
        <div className="navbar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/basket">Basket <span className="basket-total">{valueVasket?.length}</span></Link>
        </div>
    )
}