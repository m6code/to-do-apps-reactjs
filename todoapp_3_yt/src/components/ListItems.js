import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>{item.text}
                <span>
                    <FontAwesomeIcon className="faicons" icon='trash' />
                </span>
            </p>

        </div>
    })

    return <div>{listItems}</div>
}