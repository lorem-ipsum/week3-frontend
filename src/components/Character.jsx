import React, { useState } from 'react'

import axios from 'axios'

import MovieThumbnail from './MovieThumbNail'
import CharacterThumbNail from './CharacterThumbNail'

import 'bootstrap/dist/css/bootstrap.min.css'

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
      <div className="container">
        <img
          src={this.state.picurl}
          alt="pic"
          style={{ minWidth: '300px', maxWidth: '400px' }}
          width='30%'
          onError={(ev) => ev.target.src = '/assets/celebrity-default-medium.png'}
        />
        <div className="py-5" >
          <h1 className="display-3">{this.state.name}</h1>
        </div>
        <h2 className="display-4">个人简介</h2>
        <div class="card my-4">
          <div class="card-body">
            {this.state.description}
          </div>
        </div>

        <h2 className="display-4">相关电影</h2>
        {this.state.relatedmovies.map((movie) => <MovieThumbnail mid={parseInt(movie)} key={movie} />)}
        <h2 className="display-4 mt-5">相关演员</h2>
        {this.state.relatedchars.map((char) => <CharacterThumbNail cid={char[0]} key={char[0]} opnum={char[1]} />)}
      </div>
    )
  }
}

export default Character