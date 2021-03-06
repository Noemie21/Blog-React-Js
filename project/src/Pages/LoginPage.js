import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { login } from '../Services/API'
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';

export default function LoginPage() {

    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Container fluid="sm">
        <Form onSubmit={handleSubmit(async (form) => {
            
            let response = await login(form)
    
            localStorage.setItem('token', response.data.token)
    
            navigate('/user')
    
        })}>
            <br/>
            <br/>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control placeholder="Enter email" type="email" 
                    {...register("email", { 
                        required: true,  
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }
                    })}/>
                {errors.email && <span>This field is required</span>}
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
            </Form.Group>
    
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )

}
