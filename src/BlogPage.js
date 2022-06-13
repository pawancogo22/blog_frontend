import React from 'react'
import './blogpage.css'
import img from './bgimg.jpeg';

import { useEffect, useState } from 'react';

const BlogPage = ({id, title, content, imgurl}) => {

  let [data, setdata] = useState([])
    let BlogID =   this.props.match.params.blog_id;
    
  useEffect(() => {
    // const [searchParams, setSearchParams] = useSearchParams();
    
    fetch(`https://jsonplaceholder.typicode.com/todos/${BlogID}`,
    {headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : "*"
    }})
    .then(response => response.json())
    .then(json => setdata(json))
  }, []);
  return (
    <>
      <div className="blogpage">
        <div className="bimg"><img src={img} alt="blogimage" /></div>
        <div className="bcontent">
            <h1>{title} tite</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut impedit ut distinctio, dolores quo voluptatem quam est. Quaerat officia quasi ea veritatis accusantium consequuntur, corporis eaque excepturi modi minus fuga.ˀ</p>
        </div>
        <div className="back"><button>Back</button></div>
      </div>
    </>
  )
}

export default BlogPage