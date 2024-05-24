import './Contest.css';
import Card from "../components/card.js";
import RowCard from "../components/rowcard.js";
import { CardData } from '../components/carddata.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from 'react-use-cart';



const Home = ()=> {
    return (
        <div>
            
                <section className="py-4 container">
                    <div className="row justify-content-center">
                        {CardData.iqooSoul.map((item,index)=>{
                            return (
                                <Card img={item.url} 
                                name={item.name} 
                                role={item.role}
                                price={item.price}
                                item={item}
                                finishes={item.finishes}
                                key={item.id}/>
                            )
                        })}
                        {CardData.godLike.map((item,index)=>{
                            return (
                                <Card img={item.url} 
                                name={item.name} 
                                role={item.role} 
                                item={item}
                                price={item.price}
                                finishes={item.finishes}
                                key={index}/>
                            )
                        })}
                    </div>
                </section>
        </div>
    );
}

export default Home;