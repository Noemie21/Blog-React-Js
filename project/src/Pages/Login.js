import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { login } from './../Services/API'
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    let navigate = useNavigate();
    // hook qui va nous permettre de faire la redirection

    const { register, handleSubmit, formState: { errors } } = useForm();
    // useForm : hook qui permet de créer un formulaire

    return (
        <form onSubmit={handleSubmit(async (form) => {
            
            let response = await login(form)

            localStorage.setItem('token', response.data.token)

            navigate('/messages')

        })}>

            <input 
                type="email" 
                defaultValue="test@supinternet.fr" 
                {...register("email", { 
                    required: true,  
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                    }
                })} 

            /> <br />
            {errors.email && <span>This field is required</span>} <br />

            <input type="password" {...register("password", { required: true })} /> <br />
            {errors.password && <span>This field is required</span>} <br />

            <input type="submit" /> <br />

        </form>
    )

}