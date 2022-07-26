import React from 'react'
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import  NotePage from './pages/NotePage'
import { Route, Routes } from 'react-router-dom'
import './App.css'



function App() {
    return (
      <div className='container  dark'>
       
        <div className='app'>
          <Header />
          <Routes>
            <Route path='/' element={<NotesListPage />} />
            <Route path='notes/:id' element={<NotePage />} />
          </Routes>
        </div>
      </div>
    )
}

export default App