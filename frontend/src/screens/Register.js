import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      name,
      email,
      password,
      confirmPassword,
    })
  }

  return (
    <FormContainer>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='col-lg-5 col-md-8 col-12 mx-auto shadow-sm p-5'>
          <h1 className='title text-center'>Registration Form</h1> <hr />
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type='text'
              className='form-control'
              id='name'
            />
          </div>
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
            <label htmlFor='confirmPassword' className='form-label'>
              Confirm Password
            </label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type='password'
              className='form-control'
              id='confirmPassword'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='register'>Already have an account?</label>{' '}
            <Link to='/login'>Login</Link>
          </div>
          <button type='submit' className='btn btn-primary w-100 text-light'>
            REGISTER
          </button>
        </div>
      </form>
    </FormContainer>
  )
}

export default Register
