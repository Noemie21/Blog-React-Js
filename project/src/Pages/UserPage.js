import React, { useEffect, useState, useRef, useContext } from 'react';
import { StoreContext } from '../Providers/StoreProvider';
import { useNavigate } from 'react-router-dom';

export default function UserPage() {

    let navigate = useNavigate()

    const { user } = useContext(StoreContext)

    return(
        <div>
            <h1>Page User</h1>

            <ul>
                <li>{user.firstname}</li>
                <li>{user.lastname}</li>
        </ul>
        </div>
    )
}