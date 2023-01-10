import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Posts() {


    const [allPosts, getAllPosts] = useState([])

    /* API-url from server to get all blogposts available */
    const API = 'http://localhost:3001/rest/blogposts';

    function fetchPosts() {
        fetch(API)
        .then((res) => res.json())
        .then((res) => {
          getAllPosts(res)
        })
    }
    
    useEffect(() => {
      fetchPosts()
    }, [])

    /* "posts" renders all blogposts inside component */
    const posts = allPosts.map((post) => {

        /* format creation-date of blogpost */
        const extractedDate = post.created.substring(0, 10);
        const dateArray = extractedDate.split('-');
        const formattedDate = dateArray[2] + '.' + dateArray[1] + '.' + dateArray[0]

        return(
                <div className="posts--list--item" key={post.id}>
                    {/* link to post-component */}
                    <Link className="posts--list--item--link" to={`/${post.id}`}>
                        <h3 className="posts--list--item--title" >- {post.title} -</h3>
                        <h4 className="posts--list--item--subtitle" >{post.subtitle}</h4>
                        <div className="posts--list--item--date" >created: {formattedDate}</div>
                        <div className="posts--list--item--author" >by: {post.author}</div>
                    </Link>
                </div>
        )
    })

    return(
        <div className="container">
            <p>
                Welcome to this blog. Here, you can find an overview of all posts, that have been posted.
            </p>
            <hr />
            {posts.length > 0? <div className="posts--list">{posts}</div> : <h3>No posts found!</h3>}
        </div>
    );
}

export default Posts;