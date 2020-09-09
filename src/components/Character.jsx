import React, { useState } from 'react'

import axios from 'axios'

import MovieThumbnail from './MovieThumbNail'
import CharacterThumbNail from './CharacterThumbNail'


class Character extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      picurl: '',
      name: '',
      description: '',
      relatedmovies: [],
      relatedchars: []
    }
  }


  componentDidMount() {
    const that = this
    axios.get('http://localhost:8000/api/characters/' + that.props.match.params.cid + '/').then((resp) => {
      const data = resp.data
      this.setState({
        picurl: data.mainPicSrc,
        name: data.name,
        description: data.description,
        relatedmovies: data.relatedmovies,
        relatedchars: data.relatedchars
      })
    }).catch((err) => {
    })
  }

  render() {
    return (
      <>
        <img
          src={this.state.picurl}
          alt="pic"
          style={{ display: 'inline-block', minWidth: '300px', maxWidth: '400px' }}
          width='30%'
          onError={(ev) => ev.target.src = '/assets/celebrity-default-medium.png'}
        />
        <div style={{ display: 'inline-block', width: 'auto', padding: '36px', boxSizing: 'border-box' }}>
          <h1>{this.state.name}</h1>
          <p>个人简介： {this.state.description}</p>
        </div>
        <h2>相关电影</h2>
        {this.state.relatedmovies.map((movie) => <MovieThumbnail mid={parseInt(movie)} key={movie} />)}
        <h2>相关演员</h2>
        {this.state.relatedchars.map((char) => <CharacterThumbNail cid={char[0]} key={char[0]} opnum={char[1]} />)}
      </>
    )
  }
}

export default Character