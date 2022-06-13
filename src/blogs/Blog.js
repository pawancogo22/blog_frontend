import React from 'react'
import { useEffect, useState } from 'react'
import './blogs.css'
import Addblog from './Addblog'
import Blogscard from './Blogscard'
var axios = require('axios');

const Blog = ({login}) => {
  let [data, setdata] = useState([]);

  // search by id concept ??
  // let [num,setnum] = useState(null);

  const fetchArticles = () => {
    fetch("http://0.0.0.0:8000/home",
    {headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : "*"
    }})
    .then(response => response.json())
    .then(json => setdata(json))
  }

  useEffect(()=>{
    fetchArticles();
  },[]);



  const deleteblog = (id) =>{
      // const nd = data.filter((ud)=>(ud.id!==id))
      // setdata(nd);

      var data = '';

      var config = {
        method: 'delete',
        url: `http://0.0.0.0:8000/pages/${id}`,
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : "*"
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        fetchArticles();
      })
      .catch(function (error) {
        console.log(error);
      });
      

  }
  const edit = () =>{
    console.log("edit");
  }  
  return (
    <div id="blogs">
      <div className="addblog">{<Addblog fetchArticles={fetchArticles} login={login} />}</div>

      {/* search by id */}
      {/* <div className="search">
        <input type="number" name="" id="" value={num} onChange={()=>setnum(num)}/>
      </div> */}

      <div className="showblog">
      {data?.map((ud)=>{
            // if (ud.id<=5)
            return(
              <Blogscard id ={ud.id} title={ud.title} content ={ud.content} url={ud.image} dele={deleteblog} edit={edit}/>
            );
          })}
      </div>

    </div>
  )
}

export default Blog