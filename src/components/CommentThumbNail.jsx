import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { Link, useHistory } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

function CommentThumbNail(props) {
  const history = useHistory()
  const [commentText, setCommentText] = useState('')
  const [mid, setMid] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:8000/api/comments/' + props.id + '/').then((resp) => {
      const data = resp.data
      setCommentText(data.comment_text)
      setMid(data.mid)
      console(commentText, mid)
    }).catch((err) => { })
  }, [])

  const handleClick = () => {
    history.push('/movies/' + mid)
  }

  return (
    <div class="card" onClick={handleClick}>
      <div class="card-body">
        {commentText}
      </div>
    </div>
  )
}

export default CommentThumbNail