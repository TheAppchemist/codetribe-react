import { Formik } from 'formik'
import React from 'react'

const inputStyle = {
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#808080',
    marginBottom: 10,
    width: 200,
    outline: 'none'
}

export const Login = () => {
    const handleSubmit = values => {
        console.log(values)
    }

    return (
        <div style={{
            display: 'flex', 
            background: '#dfdfdf', 
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                width: 240,
                padding: 20,
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <h2 style={{textAlign: 'center', marginBottom: 20}}>Welcome</h2>
                <Formik initialValues={{
                    email: '',
                    password: ''
                }} onSubmit={handleSubmit}>
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    }) => {
                        return (
                            <div>
                                <input value={values['email']} name='email' type='email' onChange={handleChange} onBlur={handleBlur} style={inputStyle} placeholder='Email' novalidate />
                                <input value={values['password']} name='password' type='password' onChange={handleChange} onBlur={handleBlur} style={inputStyle}  placeholder='Password' novalidate />
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <button onClick={handleSubmit} type='submit' style={{
                                        padding: 10,
                                        background: '#000',
                                        color: 'white',
                                        width: 200
                                    }}>Login</button>
                                </div>
                            </div>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}