import { useEffect } from "react";
import { useState } from "react"
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({category}) => {
  const [article,setArticle] = useState([]);

  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    fetch(url).then(response => response.json()).then(data =>setArticle(data.articles))
  },[category]);

  return (
    <>
    <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
    {article.map((news,index)=>{
      return <NewsItem key={index} title={news.title} desription={news.desription} src={news.urlToImage} url={news.url}/>
    })}
    </>
  )
}
