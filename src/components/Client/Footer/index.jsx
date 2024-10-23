import './Footer.scss'

function Content() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="social-icons">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Zalo</a></li>
              <li><a href="#">Skype</a></li>
              <li><a href="#">Linkedin</a></li>
            </ul>
          </div>
          <div className="col-lg-12">
            <div className="copyright-text">
              <p>Copyright 2024 Dtee.com
                {/* | Design: <a rel="nofollow" href="https://templatemo.com" target="_parent">TemplateMo</a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Content;
