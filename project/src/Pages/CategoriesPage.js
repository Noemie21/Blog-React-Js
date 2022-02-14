import React, { useEffect, useState, useRef, useContext } from 'react';
import { StoreContext } from '../Providers/StoreProvider';
import { useNavigate } from 'react-router-dom';

export default function CategoriesPage() {

    let navigate = useNavigate()

    const { categories } = useContext(StoreContext)

    return(
        <div>
            <h1>Page Categories</h1>
            {categories.map(({ name }) => {
                return <ul>
                    <li>{name}</li>
                </ul>
            })}
        </div>
    )
}