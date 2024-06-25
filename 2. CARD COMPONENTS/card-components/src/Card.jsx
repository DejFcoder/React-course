import profilePic from './assets/profilePisture.jpg'

function Card() {

    return(
        <div className="card">
            <img className="cardImg" src={profilePic} alt="profile picture" />
            <h2 className="cardTitle">David Trebaticky</h2>
            <p className="cardText">I am studying computer science and IT</p>
        </div>
    );
}

export default Card;
