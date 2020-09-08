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
    <div style={{ width: '100%', height: '40px', position: 'absolute', top: '0px', background: '#eeeeee' }}>
      <div onClick={handleTag1} style={{ width: '60px', height: '40px', position: 'absolute', top: '0px', left: '0px', lineHeight: '40px', textAlign: 'center' }}>电影</div>
      <div onClick={handleTag2} style={{ width: '60px', height: '40px', position: 'absolute', top: '0px', left: '60px', lineHeight: '40px', textAlign: 'center' }}>演员</div>
    </div>
  )
}

export default Menubar