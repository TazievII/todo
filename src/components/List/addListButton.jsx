import React, { Fragment, useState } from "react";
import Badge from '../Badge';
import closeSvg from '../../assets/img/close.svg';

import List from "./index";


const AddListButton = ({ colors }) => {
    const [visible, setVisible] = useState(false);
    const [colorCheck, setColorCheck] = useState(colors[0].id)
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
                <img 
                onClick={ () => setVisible(false)}
                src={closeSvg} 
                alt="close" 
                className="add-list-popup-closeBtn"/>
                <input className='field' type='text' placeholder='Название папки'></input>
                <div className="add-list-popup_colors">
                    {
                        colors.map(color => 
                        <Badge 
                            onClick={() => setColorCheck(color.id)}
                            key={color.id} 
                            color={color.name}
                            className={colorCheck === color.id && 'active'}/>)
                    }
                </div>
                <button className='button'>Добавить папку</button>
            </div>}
        </Fragment>
    )
};

export default AddListButton;