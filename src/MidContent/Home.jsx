

import React from 'react'
import Banner from './Banner'
import { Outlet } from 'react-router-dom'
import BooksapiFetch from '../Api/BooksapiFetch'

function Home() {
  return (
    <div>
        <Banner/>
        <BooksapiFetch/>

    </div>
  )
}

export default Home