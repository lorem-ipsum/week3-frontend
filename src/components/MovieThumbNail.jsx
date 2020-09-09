import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { Link, useHistory } from 'react-router-dom'


function MovieThumbNail(props) {
  const history = useHistory()
  const [picurl, setPicurl] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/movies/' + props.mid + '/').then((resp) => {
      const data = resp.data
      setPicurl(data.mainPicSrc)
      setTitle(data.title)
    }).catch((err) => { })
  }, [])

  const handleClick = () => {
    history.push('/movies/' + props.mid)
  }

  return (
    <div
      onClick={handleClick}
      style={{ display: 'inline-block', width: '180px', height: '240px', background: '#dedede', margin: '40px' }}
    >
      <img
        src={picurl}
        alt="pic"
        style={{ width: '180px' }}
        onError={(ev) => ev.target.src = '/assets/celebrity-default-medium.png'}
        width='180px'
        height='240px'
      />
      <p style={{ zIndex: 100, textAlign: 'center' }}>{title}</p>
    </div >
  )
}

export default MovieThumbNail