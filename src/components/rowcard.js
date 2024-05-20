import { CardData } from './carddata';
import './rowcard.css';

const RowCard = () => {
    return (
        <div>
            <div className="card-top-row">
                <h2 className="team-name">iQOO SouL</h2>
                <img src="./player-photo/soul-logo.png" alt="logo" className="team-logo"></img>
            </div>
        </div>
    );
}

export default RowCard;