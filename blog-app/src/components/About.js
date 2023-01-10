
function About() {
    return(
        <div className="container">
            <h3>About this project</h3>
            <p className="about--text">
                This project is meant to show farbenmeer and myself, where I'm standing in terms of skills and abilities at the moment.
            </p>
            <h3> App structure</h3>
            <p className="about--text">
                I've used create-react-app to build an app, which uses the server provided to fetch blogposts and show them as a simple blog-app.
                The structure is simple. 
                <ul className="about--list">
                    <li className="about--list--item">Overview page as homepage: Posts-component</li>
                    <li className="about--list--item">Detailed look at each post: Post-component</li>
                    <li className="about--list--item">Navigation-bar to show links: Header</li>
                    <li className="about--list--item">About-page</li>
                </ul>
            </p>
            <h3>Developement</h3>
            <p className="about--text">
                I used Git as my versioning tool. 
                Although I'm working on my own on this project It's a good practice to use versioning to be able to see commits and be able to understand the lifecycle of the app. 
                If i would have worked in a team I would have used branching but since theres no need for working simultaneously on this project I didn't see the benefits.
                <br />
                For the app itself, besides react and react-dom as basic packages, I used react-router-dom as a way to deal with different pages and routes.
            </p>
        </div>
    )
}

export default About;