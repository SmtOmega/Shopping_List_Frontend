import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {useGlobalContext} from '../context'


const ShoppingList = () => {
    const {items, openModal, deleteItem, loading, error} = useGlobalContext()
    if(loading){
        return <div className="container">
            <h1>loading...</h1>
        </div>
    }
    if(error){
        return <div className="container">
            <h1>Something went Wrong, Check your Internet Connection...</h1>
            
        </div>
    }
    return <main>
        <div className="container">
            <button className="add-btn" onClick={openModal}>Add Item</button>
            <div>
                {items.map(item =>{
                    const {_id, name} = item
                    return <article key={_id}>
                        <button className="remove-btn" onClick={() => deleteItem(_id)}><FaTimes /></button>
                        <h3>{name}</h3>
                    </article> 
                })}
            </div>
        </div>
    </main>
}

export default ShoppingList