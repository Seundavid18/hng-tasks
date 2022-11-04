import React, { useState } from 'react'
import './contact.css'
import Form from 'react-bootstrap/Form';




const Contact = () => {

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        })

        if(!!errors[field])
        setErrors({
            ...errors,
            [field]:null
        })
    }

    const validateForm = () => {
        const { firstName, lastName, email, message, agreement } = form
        const newErrors = {}

        if(!firstName || firstName === "") 
            newErrors.firstName = "Please enter your first name"
        if(!lastName || lastName === "") 
            newErrors.lastName = "Please enter your last name"
        if(!email || email === "") 
            newErrors.email = "Please enter your email address"
        if(!message || message === "") 
            newErrors.message = "Please enter your message"
        if(!agreement || agreement === "") 
            newErrors.agreement = "You must agree to terms"


        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formErrors = validateForm()
        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors)
        }else{
            alert('Thank you, your message has been sent. You will be contacted shortly!')
            window.location.reload()
        }
    } 

  return (
    <div className='container'>
      <div className='formContainer'>
        <div className='wrapper'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>

            <Form className='form'>
                <div className='formItem d-lg-flex gap-3'>
                    <Form.Group className='formItemContainer'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            id='first_name formInputItem' 
                            required 
                            placeholder='Enter your first Name' 
                            className='mt-2' 
                            value= {form.firstName}
                            onChange={(e) => setField("firstName", e.target.value)}
                            isInvalid= {!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='formItemContainer'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            required 
                            id='last_name formInputItem' 
                            placeholder='Enter your last Name' 
                            className='mt-2'
                            value= {form.lastName}
                            onChange={(e) => setField("lastName", e.target.value)}
                            isInvalid= {!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <Form.Group className='mt-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        required 
                        id='email' 
                        placeholder='yourname@email.com' 
                        className='mt-2'
                        value= {form.email}
                        onChange={(e) => setField("email", e.target.value)}
                        isInvalid= {!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                            {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="text-area mt-4">
                    <Form.Control 
                        as="textarea"
                        id='message' 
                        required 
                        placeholder="Send me a message and I'll reply you as soon as possible..." 
                        name="Message" 
                        cols="120" 
                        rows="8" 
                        style={{maxWidth: "100%"}} 
                        value= {form.message}
                        onChange={(e) => setField("message", e.target.value)}
                        isInvalid= {!!errors.message}
                    >
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                            {errors.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <div className='mt-3' >
                    <Form.Check 
                        type="checkbox" 
                        id='checkbox' 
                        label="You agree to providing your data to Seun David who may contact you."
                        feedback="invalid"
                        value= {form.agreement}
                        onChange={(e) => setField("agreement", e.target.checked)}
                        isInvalid= {!!errors.agreement}
                    />
                    <Form.Label for="checkbox" type="invalid"></Form.Label>
                </div>

                <div className="mt-4">
                    <button type="submit" className="btn btn-primary" id='btn__submit' onClick={handleSubmit}>Send Message</button> 
                </div>
            </Form>
        </div>
      </div>
    </div>
  )
}

export default Contact
