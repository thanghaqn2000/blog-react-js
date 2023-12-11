import './Header.scss'

function Header(){
  return (
    <header className="">
    <nav className="navbar navbar-expand-lg">
      <div className="container col-xl-12">
        <div className='logo col-xl-3'>
          <a className="navbar-brand" href="index.html"><h2>Stand Blog<em>.</em></h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse col-xl-9" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Home</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="about.html">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html">Blog Entries</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="post-details.html">Post Details</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
}

export default Header;
