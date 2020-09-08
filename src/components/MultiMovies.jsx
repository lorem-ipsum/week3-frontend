import React, { useState, useEffect } from 'react'

import MovieThumbNail from './MovieThumbNail'

import axios from 'axios'

import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

function MultiMovies(props) {
  const [movielist, setMovielist] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPageNum, setTotalPageNum] = useState(0)
  const [urlPrefix, setUrlPrefix] = useState('http://localhost:8000/api/movies/?')
  useEffect(() => {
    axios.get('http://localhost:8000/api/movies/?page=1').then((resp) => {
      setMovielist(resp.data.movielist)
      setTotalPageNum(resp.data.totalPageNum)
    }).catch((err) => { })
  }, [])

  const pageNumberOnChange = (page) => {
    console.log('page changed to ', page)
    setCurrentPage(page)
    axios.get('http://localhost:8000/api/movies/?page=' + page.toString()).then((resp) => {
      setMovielist(resp.data.movielist)
      console.log(movielist)
    }).catch((err) => { })
  }
  return (
    <>
      {movielist.map((movie) => <MovieThumbNail mid={movie} key={movie} />)}
      <div style={{ margin: '48px auto auto', textAlign: 'center' }}>
        {console.log(totalPageNum)}
        <Pagination
          onChange={pageNumberOnChange}
          total={totalPageNum}
          current={currentPage}
          pageSize={24}
          showQuickJumper
        />
      </div>
    </>
  )
}

export default MultiMovies;