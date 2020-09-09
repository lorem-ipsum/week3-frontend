import React, { useState, useEffect, useRef } from 'react'

import { useHistory } from 'react-dom'

import SearchField from 'react-search-field'

import Select from 'react-select'

import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'

import MultiMovies from './MultiMovies'
import MultiCharacters from './MultiCharacters'
import MultiComments from './MultiComments'

function Search() {
  const [option, setOption] = useState('')
  const [url, setUrl] = useState('')
  const [searched, setSearched] = useState(false)
  const [chosen, setChosen] = useState('Choose...')
  const [input, setInput] = useState('')


  const onSearch = () => {
    if (option === '') return
    else if (option === 'movie') {
      setUrl('http://localhost:8000/api/search?item=movie&key=' + input + '&')
    } else if (option === 'character') {
      setUrl('http://localhost:8000/api/search?item=character&key=' + input + '&')
    } else if (option === 'comment') {
      setUrl('http://localhost:8000/api/search?item=comment&key=' + input + '&')
    }
    setSearched(true)
  }

  let toggleRef = useRef()

  const clickMovie = () => {
    setSearched(false)
    setChosen('Movie')
    setOption('movie')
  }
  const clickCharacter = () => {
    setSearched(false)
    setChosen('Character')
    setOption('character')
  }
  const clickComment = () => {
    setSearched(false)
    setChosen('Comment')
    setOption('comment')
  }

  return (
    <div className="container">
      <div class="input-group" style={{ margin: '80px auto 40px', width: '50%' }}>
        <div class="input-group-prepend">
          <button ref={toggleRef} class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{chosen}</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" onClick={clickMovie}>Movie</a>
            <a class="dropdown-item" onClick={clickCharacter}>Character</a>
            <a class="dropdown-item" onClick={clickComment}>Comment</a>
          </div>
        </div>
        <input
          value={input}
          onInput={e => {
            setSearched(false)
            setInput(e.target.value)
          }}
          type="text"
          class="form-control"
          aria-label="Text input with segmented dropdown button"
        />
        <div class="input-group-append">
          <button onClick={onSearch} type="button" class="btn btn-outline-secondary">Search</button>
        </div>
      </div>
      {
        searched && (
          <>
            {option === 'movie' && <MultiMovies url={url} time />}
            {option === 'character' && <MultiCharacters url={url} time />}
            {option === 'comment' && <MultiComments url={url} time />}
          </>
        )
      }
    </div>
  )
}

export default Search