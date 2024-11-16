
import './App.css';

function App() {
  return (
     <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="MetaBlog Logo" />
        <span class="bold-text">info-tasjil </span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#single-post">Single Post</a></li>
        <li><a href="#pages">Pages</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <button className="toggle-theme">
        <i className="fa fa-sun-o"></i>
      </button>
    </nav>
  );
}

export default App;
