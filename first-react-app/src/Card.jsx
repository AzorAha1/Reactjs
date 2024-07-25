import profilepic from './assets/profilepic.jpeg';
function Card(){
    return(
        <div className="card">
            <img src={profilepic} alt="profile picture" className='card-image'/>
            <h2>Mohammed Faisal Adam</h2>
            <p>Software Developer</p>
        </div>
    );
}
export default Card;