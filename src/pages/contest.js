import './Contest.css';
import Card from "../components/card.js";
import RowCard from "../components/rowcard.js";
import { CardData } from '../components/carddata.js';

const Contest = ()=> {
    
    const cards = CardData.map(item=> {
        return (
            <Card 
                name={item.name}
                url={item.url}
            />
        )
    })
    
    
    return (
        <div>
            <div className="top-div"></div>
            <RowCard/>
            <section className="card-list">
                {cards} 
            </section>
        </div>
    );
}

export default Contest;