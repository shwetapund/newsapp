import React, {useEffect, useState} from 'react'

function Home() {
    const [news, setNews] = useState([])

    const loadNews = async () =>{

    }

    useEffect( () =>{
        loadNews()
    }, [])
  return (
    <div>
      <h1>News App</h1>
      
    </div>
  )
}

export default Home

