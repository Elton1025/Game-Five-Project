import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        } = useCart();
        if (isEmpty) return <h1 className="text-center">No Players Selected</h1>
    return (
        <section className="py-4 containter">
            <div clasName="row justify-content-center">
                <div className="col-12">
                    <h5>Players ({totalUniqueItems})</h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item,index)=>{
                                return (
                                <tr key={index}>
                                    <td>
                                        <img src={item.url} style={{height: '6rem'}} />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <button 
                                        className="btn btn-danger ms-2"
                                        onClick={()=> removeItem(item.id)}
                                        >Remove</button>
                                    </td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <button className="btn btn-primary ms-2">Join Contest</button>
                </div>
            </div>
        </section>
    );
}

export default Cart;