import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="container text-center mt-5">
        <header>
            <img src="/images/KLS-no-bg.png" alt="Kiwi Lawn Services Logo" className="header-logo img-fluid"/>
        </header>
        <Link to="/about" className="btn btn-primary">Learn More</Link>
      </div>
    );
  }
  
  export default Home;  