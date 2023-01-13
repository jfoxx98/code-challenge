
function About() {
    return(
        <div className="container">
            <h3>About this project</h3>
            <p className="about--text">
                This project was meant to show farbenmeer and myself, where I'm standing in terms of skills and abilities at the moment.
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
            <h3>Things to add</h3>
            <p className="about--text">
                Since time and my skills made me go some shortcuts, there are definitly things to implement furthermore. Above you'll find a list of possible improvements to the app and code:
                <ul className="about--list">
                    <li className="about--list--item">
                        <b>Testing:</b> Theres already Jest testing implemented as a package. Jest testing could be used for testing the components of this react app. 
                        It has great features and is not super complicated. Especially on small apps as such. 
                        Nonetheless I haven't done Jest testing so far, so it would require additional time to teach me how to use it.
                    </li>
                    <li className="about--list--item">
                        <b>Show less/Show more:</b> Some blogposts may grow in size to a point, where there is too much text to show at once. 
                        In this case, to show only a portion on the first rendering of the detail page and an option to "show more" could come in handy.
                    </li>
                    <li className="about--list--item">
                        <b>Legal notice and cookie pop-up:</b> Since this website is a fictional app, 
                        I haven't implemented any legal notice and a cookie pop-up as it is required when publishing the app and using cookies.
                    </li>
                </ul>
            </p>
        </div>
    )
}

export default About;