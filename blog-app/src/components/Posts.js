import React, {useState, useEffect} from 'react';

function Posts() {


    const [allPosts, getAllPosts] = useState([])

    const API = 'http://localhost:3001/rest/blogposts';

    function getPosts() {
        fetch(API)
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          getAllPosts(res)
        })
    }
    
    useEffect(() => {
      getPosts()
    }, [])

    const posts = allPosts.map((post, id) => {
        return(
            <div class="post" key={id}>
                <h3 class="post--title" >- {post.title} -</h3>
                <h4 class="post--subtitle" >{post.subtitle}</h4>
                <date class="post--date" >{post.created.format('YYYY-MM-DD')}</date>
                <div class="post--author" >author: {post.author}</div>
            </div>
        )
    })

    return(
        <main class="container">
            <p>
                Welcome to this blog. Here, you can find an overview of all posts, that have been posted.
            </p>
            <div class="overview"> {posts}</div>
        </main>
    );
}

export default Posts;