import React, { useEffect, useState } from 'react'
import AddButton from '../components/AddButton'
import ListItems from '../components/ListItems'

const NotesListPage = () => {
  let [notes, setNotes] = useState([])
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    setLoading(true)
    let resp = await fetch('/api/notes')
    let data = await resp.json()
    setNotes(data)
    setLoading(false)
    console.log('data:', data)
  }
  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'> &#9782; Notes</h2>
        <p className='notes-count'> {notes.length} </p>{' '}
      </div>
      <div className='notes-list'>

        {loading ?  <h2>loading.....</h2>  : notes.map((note, index) => {
          return <ListItems note={note} key={index} />
        })}
      </div>
      <AddButton/>
    </div>
  )
}

export default NotesListPage
