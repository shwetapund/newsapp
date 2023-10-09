import React, { useEffect, useState } from 'react'
import './Home.css';
import axios from "axios";
import NewsArticle from '../components/NewsArticle/NewsArticle';

function Home() {
  const [news, setNews] = useState([])
  const [searchQuery, setSearchQuery] = useState("mumbai")
  const loadNews = async () => {
  try{
   
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-10-08&to=2023-10-08&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`)
      console.log(response.data.articles);
      setNews(response.data.articles)
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    loadNews()
  }, [])

  useEffect(()=>{
    loadNews()
  }, [searchQuery])
  return (
    <div>
      <h1 className='newsApp-title'>News App</h1>
      <input
      className='search-input'
      type="text"
      value={searchQuery}
      onChange={(e)=>
      {
        setSearchQuery(e.target.value)
      }}
      />
      <div className='news-container'>
        {
          news.map((newArticles, index) => {
            const { author, title, description, url, urlToImage, publishedAt,  } = newArticles;
            return (
              <NewsArticle title={title} author={author} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt
              }  key={index} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Home

