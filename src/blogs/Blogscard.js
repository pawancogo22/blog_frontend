import React from "react";
import { useState } from "react";
import "./blogcard.css";
// import { Link } from "react-router-dom";
const Blogcard = ({ id, title, content , url, dele, edit, c, save }) => {
  let [titleEdit, setTitleEdit] = useState(content);
  let [viewTitle, setViewTitle] = useState(content);

  let saveData = () => {
    console.log("test");
    setViewTitle(viewTitle);
  };
  // let img =
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png";

  return (
    // <Link to={`/blogs/${id}`} >
      <div className="blog-card">
        <img src={url} alt={`blog ${id}`} />

        <div className="content">
          <div className="cont">
            <div className="t">
              <a href="">
                <h3>{title}</h3>
              </a>
            </div>
            <div className="p">
              <p>
                {titleEdit}
              </p>
            </div>
          </div>

          <div className="btn">
            <button onClick={() => dele(id)}>Del</button>
            <input
              type="text"
              name="edit"
              value={titleEdit}
              onChange={(e) => setTitleEdit(e.target.value)}
            />
            <button onClick={() => edit(id)}>Edit</button>
            <button onClick={() => saveData()}>Save</button>
          </div>
        </div>
      </div>
    // </Link>
  );
};

export default Blogcard;
