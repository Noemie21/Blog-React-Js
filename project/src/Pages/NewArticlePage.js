import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { newArticle } from '../Services/API'
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';

export default function NewArticlePage() {

    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Container fluid="sm">
    <Form onSubmit={handleSubmit(async (form) => {
            
        let response = await newArticle(form)

        navigate('/articles')

    })}>
        <br/>
        <br/>
        <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" {...register("title", { required: true })}  />
            {errors.title && <span>This field is required</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContent">
            <Form.Label>Content</Form.Label>
            <Form.Control type="text" placeholder="Content" {...register("content", { required: true })} />
            {errors.content && <span>This field is required</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="Category" {...register("category", { required: true })} />
            {errors.category && <span>This field is required</span>}
        </Form.Group>


        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    </Container>
    )

}