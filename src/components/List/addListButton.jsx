import React, { Fragment, useState } from "react";
import Badge from '../Badge';
import closeSvg from '../../assets/img/close.svg';

import List from "./index";


const AddListButton = ({ colors, onAdd }) => {
    const [visible, setVisible] = useState(false);
    const [colorCheck, setColorCheck] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');
    const closePopup = () => {
        setVisible(false);
        setInputValue('');
        setColorCheck(colors[0].id);
    };

    const addList = () => {
        if(!inputValue) {
            alert('Введите название папки')
            return;
        }
        const color = colors.find(c => c.id === colorCheck).name;
        onAdd({id: Math.random(), name: inputValue, color});
        closePopup();
    };

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
                onClick={closePopup}
                src={closeSvg} 
                alt="close" 
                className="add-list-popup-closeBtn"/>
                <input 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className='field' 
                type='text' 
                placeholder='Название папки'></input>
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
                <button onClick={addList} className='button'>Добавить папку</button>
            </div>}
        </Fragment>
    )
};

export default AddListButton;