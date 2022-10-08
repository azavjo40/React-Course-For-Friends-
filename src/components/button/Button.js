import { Link } from 'react-router-dom'
import './Button.css'

export const Button = ({ title, url, changeStyle, functionClick }) => {
    return <Link style={changeStyle} onClick={functionClick ? functionClick : ''} className='btn' to={url ? url : ''}>{title}</Link>
}