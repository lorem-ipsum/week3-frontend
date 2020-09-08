import React, { useState, useEffect } from 'react'

import CharacterThumbNail from './CharacterThumbNail'

import axios from 'axios'

import Pagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

function MultiCharacters(props) {
  const [characterlist, setCharacterlist] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPageNum, setTotalPageNum] = useState(0)
  const [urlPrefix, setUrlPrefix] = useState('http://localhost:8000/api/characters/?')
  useEffect(() => {
    axios.get('http://localhost:8000/api/characters/?page=1').then((resp) => {
      setCharacterlist(resp.data.characterlist)
      setTotalPageNum(resp.data.totalPageNum)
    }).catch((err) => { })
  }, [])

  const pageNumberOnChange = (page) => {
    console.log('page changed to ', page)
    setCurrentPage(page)
    axios.get('http://localhost:8000/api/characters/?page=' + page.toString()).then((resp) => {
      setCharacterlist(resp.data.characterlist)
      console.log(characterlist)
    }).catch((err) => { })
  }
  return (
    <>
      {characterlist.map((character) => <CharacterThumbNail cid={character} key={character} />)}
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

export default MultiCharacters;