import React, { useState, useEffect } from 'react'

import MovieThumbNail from './MovieThumbNail'

import axios from 'axios'

import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

import 'bootstrap/dist/css/bootstrap.min.css'

function MultiMovies(props) {
  const [movielist, setMovielist] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPageNum, setTotalPageNum] = useState(0)
  const [urlPrefix, setUrlPrefix] = useState(props.url)
  const [time, setTime] = useState(0.1)
  useEffect(() => {
    console.log(urlPrefix + 'page=1')
    axios.get(urlPrefix + 'page=1').then((resp) => {
      setMovielist(resp.data.movielist)
      setTotalPageNum(resp.data.totalPageNum)
      setTime(resp.data.time)
    }).catch((err) => { })
  }, [])

  const pageNumberOnChange = (page) => {
    console.log('page changed to ', page)
    setCurrentPage(page)
    axios.get(urlPrefix + 'page=' + page.toString()).then((resp) => {
      setMovielist(resp.data.movielist)
      console.log(movielist)
    }).catch((err) => { })
  }
  return (
    <div className="container">
      {props.time &&
        <div class="alert alert-light" role="alert">
          共查询到{totalPageNum}条记录，花费时间{time}秒
        </div>}
      {props.mainPage &&
        <>
          <h1 className="display-3 m-4">电影</h1>
          <div class="alert alert-light mx-4" role="alert">
            共有{totalPageNum}条记录
         </div>
        </>}
      {movielist.map((movie) => <MovieThumbNail mid={movie} key={movie} />)}
      {console.log(movielist[0], movielist[1])}
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
    </div>
  )
}

export default MultiMovies;