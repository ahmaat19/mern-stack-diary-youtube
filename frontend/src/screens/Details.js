import moment from 'moment'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { data } from '../utils/Data'
import { FaEdit, FaTrash } from 'react-icons/fa'

const Details = () => {
  const param = useParams()

  const dataObj = data?.find((obj) => obj._id === param.id)

  const handleDelete = (e) => {
    console.log(`Delete ${e}`)
  }

  return (
    <div className='col-lg-8 col-md-10 col-12 mx-auto'>
      <div className='card border-0 shadow-sm rounded-0'>
        <div className='card-body'>
          <div className='card-img-top text-center title'>
            <span className='display-1'>
              {moment(dataObj?.eventDate).format('DD')}
            </span>
            <span>
              {moment(dataObj?.eventDate).format('MMMM YYYY, H:mm:ss')}
            </span>
          </div>
          <hr />
          <Link
            to={`/diary/details/${dataObj?._id}`}
            className='text-decoration-none'
          >
            <h2 className='card-title font-monospace fs-5 fw-bold'>
              {dataObj?.title}
            </h2>
          </Link>
          <div className='card-text'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <div>
                <span>{dataObj?.user?.image}</span>
                <small className='ms-2 f-italic'>{dataObj?.user?.name}</small>
              </div>
              <div>
                <Link to={`/diary/form/${dataObj?._id}`}>
                  <FaEdit />
                </Link>
                <FaTrash
                  onClick={() => handleDelete(dataObj?._id)}
                  className='ms-2 text-danger'
                />
              </div>
            </div>
            <ReactMarkdown children={`${dataObj?.description}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
