import React from 'react';
import { getToken } from '../Services/API'
import { Navigate } from 'react-router-dom'

export default function NotFoundPage() {
    
    if (getToken()) {
        //return <Navigate to="/messages" />
        // afficher la page du user
    } else {
        return <Navigate to="/login" />
    }

}