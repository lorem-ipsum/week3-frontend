import React, { useState, useEffect } from 'react'

import CommentThumbNail from './CommentThumbNail'

import axios from 'axios'

import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

import 'bootstrap/dist/css/bootstrap.min.css'


function MultiComments(props) {
  const [commentlist, setCommentlist] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPageNum, setTotalPageNum] = useState(0)
  const [urlPrefix, setUrlPrefix] = useState(props.url)
  const [time, setTime] = useState(0.1)
  useEffect(() => {
    axios.get(urlPrefix + 'page=1').then((resp) => {
      setCommentlist(resp.data.commentlist)
      setTotalPageNum(resp.data.totalPageNum)
      setTime(resp.data.time)
    }).catch((err) => { })
  }, [])

  const pageNumberOnChange = (page) => {
    console.log('page changed to ', page)
    setCurrentPage(page)
    axios.get(urlPrefix + 'page=' + page.toString()).then((resp) => {
      setCommentlist(resp.data.commentlist)
      console.log(commentlist)
    }).catch((err) => { })
  }
  return (
    <>
      {props.time &&
        <div class="alert alert-light" role="alert">
          共查询到{totalPageNum}条记录，花费时间{time}秒
        </div>}
      {commentlist.map((comment) => <CommentThumbNail id={comment} key={comment} />)}
      {console.log(commentlist[0], commentlist[1])}
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

export default MultiComments;