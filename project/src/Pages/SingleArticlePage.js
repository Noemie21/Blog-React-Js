import React, { useEffect, useState, useRef, useContext } from 'react';
import { StoreContext } from '../Providers/StoreProvider';
import { useNavigate, useParams } from 'react-router-dom';

export default function SingleArticlePage() {
//this.props.match.params.id
    let navigate = useNavigate()

    const { articles } = useContext(StoreContext)
    const { id } = useParams();
    console.log(id)
    // le sonsole.log fonctionne (car l'id est en dur)

    return(
        <div>
            {articles.map(({ id, title, created_at, content }) => {
                // forcement mon if bug
                if (id == id) {
                <h1>Article {id}</h1>
                return <ul>
                    <li>{title}</li>
                    <li>{created_at}</li>
                    <li>{content}</li>
                </ul>
                }
                else {
                    return(
                        <div></div>
                    )
                }
            })}
        </div>
    )



}