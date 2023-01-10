import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

function Post() {

    const {id} = useParams();

    const [post, getPost] = useState({});

    /* API-url from server to get specific blogpost by id */
    const API = `http://localhost:3001/rest/blogpost/${id}`;

    function fetchPost() {
        fetch(API)
        .then((res) => res.json())
        .then((res) => {
          getPost(res)
        })
    }
    
    useEffect(() => {
      fetchPost()
    },)

    return(
        <div className="container">
            <div className="post--detail">
              <h3 className="post--detail--title" >- {post.title} -</h3>
              <h4 className="post--detail--subtitle" >{post.subtitle}</h4>
              <div className="post--detail--author" >by: {post.author}</div>
              <div className="post--detail--content">
                <img className="post--detail--content--image" src={post.image} alt="blogpost"/>
                <p className="post--detail--content--text">{post.content}</p>
              </div>
              {/* link back to Posts-component */}
              <Link className="post--detail--link" to="/"><button className="button">BACK</button></Link>
            </div>
        </div>
    )
}

export default Post;