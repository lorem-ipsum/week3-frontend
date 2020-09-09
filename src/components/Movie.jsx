import React, { useState } from 'react'

import axios from 'axios'

import CharacterThumbnail from './CharacterThumbNail'

import 'bootstrap/dist/css/bootstrap.min.css'

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      picurl: '',
      movietitle: '',
      star: '',
      summary: '',
      chars: [],
      comments: [],
    }
  }


  componentDidMount() {
    const that = this
    axios.get('http://localhost:8000/api/movies/' + that.props.match.params.mid + '/').then((resp) => {
      const data = resp.data
      console.log('data')
      this.setState({
        picurl: data.mainPicSrc,
        movietitle: data.title,
        star: data.star,
        summary: data.summary,
        chars: data.characters,
        comments: data.comments
      })
    }).catch((err) => {
      // console.log("failure")
    })
  }

  render() {
    return (
      <div className="container">
        <img
          src={this.state.picurl}
          alt="pic"
          style={{ minWidth: '300px', maxWidth: '400px' }}
          width='30%'
          onError={(ev) => ev.target.src = '/assets/celebrity-default-medium.png'}
        />
        <div className="py-5" >
          <h1 className="display-3">{this.state.movietitle} ({this.state.star})</h1>
        </div>
        <h2 className="display-4">电影简介</h2>
        <div class="card my-4">
          <div class="card-body">
            {this.state.summary}
          </div>
        </div>

        <h2 className="display-4 mt-5">相关演员</h2>
        {this.state.chars.map((str) => <CharacterThumbnail cid={parseInt(str)} key={str} />)}
        <h2 className="display-4 mt-5">影评</h2>
        <ul className="mt-4 list-group">
          {this.state.comments.map((comment) => <li class="list-group-item" key={comment}>{comment}</li>)}
        </ul>
      </div >
    )
  }
}

export default Movie