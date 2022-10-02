import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { data } from '../utils/Data'

const Form = () => {
  const param = useParams()
  const navigate = useNavigate()

  const [id, setId] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [formStatus, setFormStatus] = useState('create')

  useEffect(() => {
    if (param?.id) {
      const dataObj = data?.find((obj) => obj._id === param.id)
      if (dataObj) {
        setTitle(dataObj?.title)
        setDescription(dataObj?.description)
        setEventDate(moment(dataObj?.eventDate).format('YYYY-MM-DDTHH:MM'))
        setFormStatus('edit')
        setId(dataObj?._id)
      }
    } else {
      setTitle('')
      setDescription('')
      setEventDate('')
      setFormStatus('create')
      setId(null)
    }
  }, [param])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log({
      formStatus,
      _id: id,
      title,
      description,
      eventDate,
    })
  }
  return (
    <FormContainer>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className='col-md-8 col-12 mx-auto shadow-sm p-5'>
          <h1 className='title text-center'>Diary Form</h1> <hr />
          <div className='mb-3'>
            <label htmlFor='title' className='form-label'>
              Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type='text'
              className='form-control'
              id='title'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='description' className='form-label'>
              Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              cols={30}
              rows={10}
              type='text'
              className='form-control'
              id='description'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='date' className='form-label'>
              Event Date
            </label>
            <input
              onChange={(e) => setEventDate(e.target.value)}
              value={eventDate}
              type='datetime-local'
              className='form-control'
              id='date'
            />
          </div>
          <Link
            to='/'
            type='button'
            className='btn btn-secondary w-50 text-light rounded-0'
          >
            CANCEL
          </Link>
          <button type='submit' className='btn btn-primary w-50 text-light'>
            SUBMIT
          </button>
        </div>
      </form>
    </FormContainer>
  )
}

export default Form
