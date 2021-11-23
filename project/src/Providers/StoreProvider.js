import React, { createContext, useState, useEffect, useRef, useContext } from 'react';
import { getMessages } from '../Services/API';

export const StoreContext = createContext()

export const StoreProvider = (props) => {

    let [ themeMode, setThemeMode ] = useState('light')
    let [messages, setMessages] = useState([])
    let interval = useRef()

    return (
        <StoreContext.Provider value={{ themeMode, setThemeMode}} >
            {props.children}
        </StoreContext.Provider>
    )

}