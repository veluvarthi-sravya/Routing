import "./index.css"


const Home = () => {
    return (
        <div className="home-container">
            <img 
              src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png" 
              alt="Home" 
              className="home-img"
            />
            <h1 className="home-heading">Home</h1>
            <p className="home-description">
              Welcome to my portfolio! This is the Home page.
            </p>
        </div>
    );
};

export default Home;
