import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
const NotePage = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  let { id } = useParams()
  useEffect(() => {
    getNote()
  }, [id])

  let getNote = async () => {
    if(id === 'new') return
    let resp = await fetch(`/api/notes/${id}/`)
    let data = await resp.json()
    console.log('data:', data)
    setData(data)
  }
  let updateNotes = async () => {
    await fetch(`/api/notes/${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }
  let createNote = async () => {
   fetch(`/api/notes/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

     navigate('/')
  }

  let deleteNoteHandler = async () => {
    fetch(`/api/notes/${id}/`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
    navigate('/')
  }

  let submitHandler = () => {
    if (id !== 'new' && data.body == '' )
    {
     deleteNoteHandler()
    } else if ( id !== 'new' )
    {
      updateNotes()
    } else if ( id === 'new' && data !== null )
    {
      createNote()
   }





    navigate('/')
  }




  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={submitHandler} />

        </h3>
        {id !== 'new'? <button onClick={deleteNoteHandler}>delete</button> : <button  onClick={submitHandler}>Done</button>  }

      </div>{' '}
      <textarea
        onChange={(e) => {
          setData({ ...data, body: e.target.value })
        }}
        value={data?.body}>
        {' '}
      </textarea>{' '}
    </div>
  )
}

export default NotePage
