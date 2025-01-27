import './GLcard.css';
import { SecondaryButton } from '../Buttons/Button';
function GLcard(props) {
return (
    <div className='gaming-library-card'>
        <ul>
            <li><img src={props.img} alt=''/></li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>Data Added</h4><span>{props.data_added}</span></li>
            <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
            <li><h4>Currently</h4><span>{props.currently}</span></li>
            <SecondaryButton>Download</SecondaryButton>
        </ul>
    </div>
)
}

export default GLcard
