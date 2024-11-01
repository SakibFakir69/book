

import React, { useEffect, useState } from 'react'
import Showbooks from './Showbooks';

function BooksapiFetch() {

    const  [ books, setbooks ] = useState([]);


    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then ( data => setbooks(data))
    })



  return (
    <div>
        <p>Length: {books.length}</p>

        {
            books.map((books,key)=>(
                <Showbooks data={books} key={key}/>

            ))
        }


    </div>
  )
}

export default BooksapiFetch