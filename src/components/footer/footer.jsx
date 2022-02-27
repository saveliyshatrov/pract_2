import React from "react";
import './styles.css'

export default function Footer({backgroundColor, color, children}) {
    return (
        <div style={{backgroundColor, color}} 
             className={'footer'}>
             {children}
        </div>
    )
}