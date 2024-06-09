import React, { useState } from 'react'
import logo from '../assets/todo.png'
import './todo.css'

const Todo = () => {
    const [data, setData] = useState('');
    const [items, setitems] = useState([]);

    const addItem = () => {
        if (!data) {

        }
        else {
            setitems([...items, data]);
            setData('');
        }
    }

    const deleteItem = (id) => {
        const newData = items.filter((element, index)=>{
            return index !== id;
        })
        setitems(newData);
    }

    const removeAll = () => {
        setitems([]);
    }

    return (
        <>
            <div className="main flex">
                <div className="todo flex">
                    <div className="head flex">
                        <img src={logo} alt="" />
                        <h1>To-Do List</h1>
                    </div>

                    <div className="add">
                        <input type="text" placeholder='✍️Add Note...' value={data} onChange={(e) => setData(e.target.value)} />
                        <i className='bx bx-plus' onClick={addItem} ></i>
                    </div>

                    <div className="itemList flex">
                        {
                            items.map((element, index) => (
                                <div className="item" key={index} >
                                    <h1>{element}</h1>
                                    <i className='bx bxs-trash-alt' onClick={()=>deleteItem(index)} ></i>
                                </div>
                            ))
                        }
                    </div>

                    <button className="btn" onClick={removeAll} >Remove All</button>
                </div>
            </div>
        </>
    )
}

export default Todo