import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { data } from '../utils/Data'

const Home = () => {
  const [q, setQ] = useState('')
  const handleDelete = (e) => {
    console.log(`Delete ${e}`)
  }

  const filteredData = data?.filter((d) =>
    d?.title?.toLowerCase()?.includes(q?.toLowerCase())
  )

  return (
    <div className='row gy-3'>
      <div className='col-lg-12 mt-3'>
        <h3 className='text-center font-monospace'>
          Diaries List [{filteredData?.length}]
        </h3>
        <div className='row'>
          <div className='col-lg-3 col-md-5 col-12 mx-auto'>
            <div className='input-group mb-3'>
              <input
                onChange={(e) => setQ(e.target.value)}
                value={q}
                type='text'
                className='form-control shadow-none'
                placeholder='Search by title'
                aria-describedby='search'
              />
              <button
                className='btn btn-outline-primary'
                type='button'
                id='search'
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
      {filteredData?.map((obj) => (
        <div key={obj?._id} className='col-lg-4 col-md-6 col-12'>
          <div className='card border-0 shadow-sm rounded-0'>
            <div className='card-body'>
              <div className='card-img-top text-center title'>
                <span className='display-1'>
                  {moment(obj?.eventDate).format('DD')}
                </span>
                <span>
                  {moment(obj?.eventDate).format('MMMM YYYY, H:mm:ss')}
                </span>
              </div>
              <hr />
              <Link
                to={`/diary/details/${obj?._id}`}
                className='text-decoration-none'
              >
                <h2 className='card-title font-monospace fs-5 fw-bold'>
                  {obj?.title}
                </h2>
              </Link>
              <div className='card-text'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                  <div>
                    <span>{obj?.user?.image}</span>
                    <small className='ms-2 f-italic'>{obj?.user?.name}</small>
                  </div>
                  <div>
                    <Link to={`/diary/form/${obj?._id}`}>
                      <FaEdit />
                    </Link>
                    <FaTrash
                      onClick={() => handleDelete(obj?._id)}
                      className='ms-2 text-danger'
                    />
                  </div>
                </div>
                <ReactMarkdown
                  children={`${obj?.description.slice(0, 90)}...`}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
