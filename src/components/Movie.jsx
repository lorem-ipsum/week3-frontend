import React, { useState } from 'react'

import axios from 'axios'

import CharacterThumbnail from './CharacterThumbNail'


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
      <>
        <img src={this.state.picurl} alt="pic" style={{ display: 'inline-block', minWidth: '300px', maxWidth: '400px' }} width='30%' />
        <div style={{ display: 'inline-block', width: 'auto', padding: '36px', boxSizing: 'border-box' }}>
          <h1>{this.state.movietitle}</h1>
          <p>评分: {this.state.star}</p>
          <p>简介: {this.state.summary}</p>
        </div>
        <h2>Related Characters</h2>
        {this.state.chars.map((str) =>
          <CharacterThumbnail cid={parseInt(str)} key={str} />
        )}
        <h2>Comments</h2>
        {this.state.comments.map((comment) => <p key={comment}>{comment}</p>)}
      </>
    )
  }
}

export default Movie