import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { signin } from '../Services/API'
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';

export default function SignInPage() {

    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Container fluid="sm">
    <Form onSubmit={handleSubmit(async (form) => {
            
        let response = await signin(form)

        localStorage.setItem('token', response.data.token)

        navigate('/user')

    })}>
        <br/>
        <br/>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control type="text" placeholder="FirstName" {...register("firstname", { required: true })}  />
            {errors.firstname && <span>This field is required</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" placeholder="LastName" {...register("lastname", { required: true })} />
            {errors.lastname && <span>This field is required</span>}
        </Form.Group>

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
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
            {errors.email && <span>This field is required</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm the password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("password_verif", { required: true })} />
            {errors.password_verif && <span>This field is required</span>}
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    </Container>
    )

}
/*return (
    <Container fluid="sm">
    <Form onSubmit={handleSubmit(async (form) => {
            
        let response = await login(form)

        localStorage.setItem('token', response.data.token)

        navigate('/user')

    })}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control type="text" placeholder="FirstName" {...register("firstname", { required: true })}  />
            {errors.firstname && <span>This field is required</span>} <br />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" placeholder="LastName" {...register("lastname", { required: true })} />
            {errors.lastname && <span>This field is required</span>} <br />
        </Form.Group>

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
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
            {errors.email && <span>This field is required</span>} <br />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>} <br />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm the password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("password_verif", { required: true })} />
            {errors.password_verif && <span>This field is required</span>} <br />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    </Container>
)*/