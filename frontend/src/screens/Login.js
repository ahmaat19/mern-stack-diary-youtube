import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      email,
      password,
    })
  }

  return (
    <FormContainer>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='col-lg-5 col-md-8 col-12 mx-auto shadow-sm p-5'>
          <h1 className='title text-center'>Login Form</h1> <hr />
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
              className='form-control'
              id='email'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
              className='form-control'
              id='password'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='register'>Don't have an account?</label>{' '}
            <Link to='/register'>Register</Link>
          </div>
          <button type='submit' className='btn btn-primary w-100 text-light'>
            LOGIN
          </button>
        </div>
      </form>
    </FormContainer>
  )
}

export default Login
