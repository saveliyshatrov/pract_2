import React from "react";
import './styles.css'



export default function Main(props) {
    const {name, group} = props;
    return (
        <div className={'main'}>
            <div className={`name block`}>{name}</div>
            <div className={`group styles.block`}>{group}</div>
        </div>
    )
}