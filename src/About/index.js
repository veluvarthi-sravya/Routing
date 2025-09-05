import './index.css';
const About = () => {
    return (
        <div className="home-container">
            <img 
              src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png" 
              alt="About" 
              className="home-img"
            />
            <h1 className="home-heading">About</h1>
            <p className="home-description">
              Welcome to my portfolio! This is the About page.
            </p>
        </div>
    );
};

export default About;