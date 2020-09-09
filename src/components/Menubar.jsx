import React from 'react'

import { useHistory } from 'react-router-dom'

const Menubar = () => {
  const history = useHistory()

  const handleTag1 = () => {
    history.push('/movies/')
  }
  const handleTag2 = () => {
    history.push('/characters/')
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/movies/">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/movies/">Movies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/characters/">Characters</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/search/">Search</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menubar