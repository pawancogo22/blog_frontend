import React from "react";
import { useState} from "react";
import axios from "axios";

const Addblog = ({ fetchArticles,login,  }) => {
  let [atitle, setatitle] = useState("");
  let [textvalue, settextvalue] = useState("");
  let [aurl, setaurl] = useState("");
  // let [updata, setupdata] = useState(data)
  
  const addtext = () => {
    if (login) {
      // console.log(atitle);
      // console.log(textvalue);
      // console.log(aurl);
      var data = JSON.stringify({
        "title": atitle,
        "content": textvalue,
        "date": "2013",
        "image": aurl,
        "user_id": 2
      });
      
      var config = {
        method: 'post',
        url: 'http://0.0.0.0:8000/pages',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        // 
        fetchArticles();
        
      })
      .catch(function (error) {
        console.log(error);
      });

      setatitle("");
      setaurl("");
      settextvalue("");

      // useEffect(()=>{
      //   fetch("http://0.0.0.0:8000/home",
      //   {headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin' : "*"
      //   }})
      //   .then(response => response.json())
      //   .then(json => setupdata(json))
      // },[]);
    }
      
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Title"
        value={atitle}
        onChange={(e) => setatitle(e.target.value)}
      />
      <input
        placeholder="Enter Text"
        value={textvalue}
        onChange={(e) => settextvalue(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Enter Image URL"
        value={aurl}
        onChange={(e) => setaurl(e.target.value)}
      />
      <button onClick={addtext}>add</button>
    </>
  );
};

export default Addblog;
