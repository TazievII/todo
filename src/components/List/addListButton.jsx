import React, { Fragment, useState } from "react";
import List from "./index";


const AddListButton = () => {
    const [visible, setVisible] = useState(false)
    return (
        <Fragment>
            <List 
                onClick={() => setVisible(!visible)}
                items={[
                {
                    className: 'item__add-button',
                    icon: (
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    ),
                    name: 'Добавить'
                }
                ]}
            />
            {visible && <div className="add-list-popup">
                <input className='field' type='text' placeholder='Название папки'></input>
                <button>Добавить папку</button>
            </div>}
        </Fragment>
    )
};

export default AddListButton;