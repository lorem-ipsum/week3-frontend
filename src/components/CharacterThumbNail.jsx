import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { Link, useHistory } from 'react-router-dom'


function CharacterThumbNail(props) {
  const history = useHistory()
  const [picurl, setPicurl] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/characters/' + props.cid + '/').then((resp) => {
      const data = resp.data
      setPicurl(data.mainPicSrc)
      setName(data.name)
    }).catch((err) => { })
  }, [])

  const handleClick = () => {
    history.push('/characters/' + props.cid)
  }

  return (
    <div onClick={handleClick} style={{ display: 'inline-block', width: '180px', height: '240px', background: '#dedede', margin: '40px' }}>
      <img
        src={picurl}
        alt="pic"
        style={{ width: '180px' }}
        onError={(ev) => ev.target.src = '/assets/celebrity-default-medium.png'}
      />
      <p style={{ zIndex: 100, textAlign: 'center' }}>{name}</p>
    </div >
  )
}

// export default withRouter(CharacterThumbNail)
export default CharacterThumbNail