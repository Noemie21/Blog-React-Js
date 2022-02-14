import React, { createContext, useState, useEffect, useRef, useContext } from 'react';
import { useParams } from 'react-router';
import { getUser } from '../Services/API';
import { getArticles} from '../Services/API';
import { getArticle} from '../Services/API';
import { getCategories } from '../Services/API';


export const StoreContext = createContext()

export const StoreProvider = (props) => {

    let [user, setUser] = useState([])
    let interval = useRef()
    let [articles, setArticles] = useState([])
    let [article, setArticle] = useState([])
    let [categories, setCategories] = useState([])
    const { id } = useParams();

    useEffect(() => (
  
        getUser().then((data) => {
            setUser(data) 
        }),
        getArticles().then((data) => {
            setArticles(data)
        }),
        getCategories().then((data) => {
            setCategories(data)
        }),
        // je n'arrive pas à metre autre chose qu'un chiffre en dur ...
        getArticle(208).then((data) => {
            setArticle(data)
        })
    ), [])

    return (
        <StoreContext.Provider value={{ user, setUser, articles, setArticles, categories, setCategories, article, setArticle}} >
            {props.children}
        </StoreContext.Provider>
    )

}