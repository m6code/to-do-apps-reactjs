import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
            <input
                type="text"
                id={item.key}
                value={item.text}    
                onChange={(e) =>{
                    props.update(e.target.value, item.key)
                }}        
            />
                <span>
                    <FontAwesomeIcon
                        className="faicons"
                        icon='trash'
                        onClick={() => props.delete(item.key)} />
                </span>
            </p>

        </div>
    })

    return <div>{listItems}</div>
}