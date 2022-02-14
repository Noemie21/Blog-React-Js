import React, { useEffect, useState, useRef, useContext } from 'react';
import { StoreContext } from '../Providers/StoreProvider';
import { useNavigate } from 'react-router-dom';

export default function ArticlesPage() {

    let navigate = useNavigate()

    const { articles } = useContext(StoreContext)

    return(
        <div>
            <h1>Page Articles</h1>
            {articles.map(({ id, title, created_at, content }) => {
                return <ul>
                    <li>{id}</li>
                    <li>{title}</li>
                    <li>{created_at}</li>
                    <li>{content}</li>
                </ul>
            })}
        </div>
    )
}