// import { Component, useState } from "react";
// import {arr} from '../../db.json'
import trash from './trash.png';
import './save-item.css';


const Saveitem = (props) => {
    const {name, data} = props;
    return (
        <>
            <div className="save-item">
                <div className="item__text">
                    <p> {name}
                        <span>{data}</span>
                    </p>
                </div>
                <div className="item__delete">
                    <img src={trash} alt="trash" />
                </div>
            </div>
        </>

    )
}
export default Saveitem;