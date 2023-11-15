import React, { useState } from 'react';
import { data } from './data/data';
import { List } from './components/List';

function Popular(props) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};


export default function App() {
    const [list, setList] = useState(data);

    return (
        <List list={list} />
    );
}