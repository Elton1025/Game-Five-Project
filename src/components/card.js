
import './card.css';

const Card = (props) => {
    return (
                    
                    <div className="player-card">
                                <div className="individual-card">
                                    <img src={props.url} alt="Player" className="player-image"></img>
                                        <div className="player-info">
                                            <span className={props.name}>{props.name}</span>
                                        </div>
                                    <button className="add-button">Add</button>
                                </div>
                    </div>

       
    );
}



export default Card;
