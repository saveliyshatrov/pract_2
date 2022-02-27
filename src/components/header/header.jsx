import React from "react";
import './styles.css';

export default function Header({backgroundColor, color, children}) {
    return (
        <header style={{backgroundColor, color}} className={'header'}>{children}</header>
    )
}