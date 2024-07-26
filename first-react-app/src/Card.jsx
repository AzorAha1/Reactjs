import profilepic from './assets/profilepic.jpeg';
import Button from './button';
import PropsType from 'prop-types';

function Card(props){
    return(
        <div className="card">
            <img src={profilepic} alt="profile picture" className='card-image'/>
            <h2>{props.name}</h2>
            <p>{props.title ? 'Software Engineer' : 'BUM'}</p>
            <Button></Button>
        </div>
    );
}
Card.PropsType = {
    name: PropsType.string,
    title: PropsType.bool
}
Card.defaultProps = {
    name: 'Guest',
    title: false
}
export default Card;