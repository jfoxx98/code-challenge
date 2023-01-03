import React, {useState, useEffect} from 'react';

function Posts() {


    const [allPosts, getAllPosts] = useState([])

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

    const posts = allPosts.map((post, id) => {

            const extractedDate = post.created.substring(0, 10);
            const dateArray = extractedDate.split('-');
            const formattedDate = dateArray[2] + '.' + dateArray[1] + '.' + dateArray[0]

        return(
            <div className="post" key={id}>
                <h3 className="post--title" >- {post.title} -</h3>
                <h4 className="post--subtitle" >{post.subtitle}</h4>
                <div className="post--date" >created: {formattedDate}</div>
                <div className="post--author" >by: {post.author}</div>
            </div>
        )
    })

    return(
        <main className="container">
            <p>
                Welcome to this blog. Here, you can find an overview of all posts, that have been posted.
            </p>
            <hr />
            {posts.length > 0? <div className="overview">{posts}</div> : <h3>No posts found!</h3>}
        </main>
    );
}

export default Posts;