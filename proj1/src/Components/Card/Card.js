import './Card.css';
import { FaStar , FaDownload } from "react-icons/fa6";
const Card = (props) => {
    return (
        <div className='most-pop-item'>
            <div className='card-wrapper'>
                <img className='most-pop-img' src={props.img} alt='Popular' />
            <div className='most-pop-content'>
                <h4 className='most-pop-title'>
                    {props.title} <br />
                    <span>{props.category}</span>
                </h4>
                <ul>
                    <li><span style={{color: 'yellow'}}><FaStar /></span> <span>{props.rate}</span></li>
                    <li><span style={{color: 'var(--color-primary)'}}><FaDownload /></span> <span>{props.download}</span></li>
                </ul>
            </div>
        </div>
    </div>
    )
}
export default Card;