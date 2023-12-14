import "./Content.scss";
import Sidebar from "../Sidebar";
import { Link, NavLink } from "react-router-dom";

import blog_post_01 from "/src/images/blog-post-01.jpg";

function Content() {
  return (
    <section className="blog-posts header-text">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="all-blog-posts">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-post">
                    <div className="blog-thumb">
                      <img src={blog_post_01} alt="" />
                    </div>
                    <div className="down-content">
                      <span>Lifestyle</span>
                      <NavLink to="/content-detail">
                        <h4>Content detail</h4>
                      </NavLink>
                      <a href="post-details.html"></a>
                      <ul className="post-info">
                        <li>
                          <a href="#">Admin</a>
                        </li>
                        <li>
                          <a href="#">May 31, 2020</a>
                        </li>
                        <li>
                          <a href="#">12 Comments</a>
                        </li>
                      </ul>
                      <p>
                        Stand Blog is a free HTML CSS template for your CMS
                        theme. You can easily adapt or customize it for any kind
                        of CMS or website builder. You are allowed to use it for
                        your business. You are NOT allowed to re-distribute the
                        template ZIP file on any template collection site for
                        the download purpose.{" "}
                        <a
                          rel="nofollow"
                          href="https://templatemo.com/contact"
                          target="_parent"
                        >
                          Contact TemplateMo
                        </a>{" "}
                        for more info. Thank you.
                      </p>
                      <div className="post-options">
                        <div className="row">
                          <div className="col-6">
                            <ul className="post-tags">
                              <li>
                                <i className="fa fa-tags"></i>
                              </li>
                              <li>
                                <a href="#">Beauty</a>,
                              </li>
                              <li>
                                <a href="#">Nature</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul className="post-share">
                              <li>
                                <i className="fa fa-share-alt"></i>
                              </li>
                              <li>
                                <a href="#">Facebook</a>,
                              </li>
                              <li>
                                <a href="#"> Twitter</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="blog-post">
                    <div className="blog-thumb">
                      <img src={blog_post_01} alt="" />
                    </div>
                    <div className="down-content">
                      <span>Lifestyle</span>
                      <NavLink to="/content-detail">
                        <h4>Content detail</h4>
                      </NavLink>
                      <a href="post-details.html"></a>
                      <ul className="post-info">
                        <li>
                          <a href="#">Admin</a>
                        </li>
                        <li>
                          <a href="#">May 31, 2020</a>
                        </li>
                        <li>
                          <a href="#">12 Comments</a>
                        </li>
                      </ul>
                      <p>
                        Stand Blog is a free HTML CSS template for your CMS
                        theme. You can easily adapt or customize it for any kind
                        of CMS or website builder. You are allowed to use it for
                        your business. You are NOT allowed to re-distribute the
                        template ZIP file on any template collection site for
                        the download purpose.{" "}
                        <a
                          rel="nofollow"
                          href="https://templatemo.com/contact"
                          target="_parent"
                        >
                          Contact TemplateMo
                        </a>{" "}
                        for more info. Thank you.
                      </p>
                      <div className="post-options">
                        <div className="row">
                          <div className="col-6">
                            <ul className="post-tags">
                              <li>
                                <i className="fa fa-tags"></i>
                              </li>
                              <li>
                                <a href="#">Beauty</a>,
                              </li>
                              <li>
                                <a href="#">Nature</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul className="post-share">
                              <li>
                                <i className="fa fa-share-alt"></i>
                              </li>
                              <li>
                                <a href="#">Facebook</a>,
                              </li>
                              <li>
                                <a href="#"> Twitter</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="blog-post">
                    <div className="blog-thumb">
                      <img src={blog_post_01} alt="" />
                    </div>
                    <div className="down-content">
                      <span>Fashion</span>
                      <NavLink to="/content-detail">
                        <h4>Content detail</h4>
                      </NavLink>
                      <ul className="post-info">
                        <li>
                          <a href="#">Admin</a>
                        </li>
                        <li>
                          <a href="#">May 14, 2020</a>
                        </li>
                        <li>
                          <a href="#">48 Comments</a>
                        </li>
                      </ul>
                      <p>
                        Nullam at quam ut lacus aliquam tempor vel sed ipsum.
                        Donec pellentesque tincidunt imperdiet. Mauris sit amet
                        justo vulputate, cursus massa congue, vestibulum odio.
                        Aenean elit nunc, gravida in erat sit amet, feugiat
                        viverra leo. Phasellus interdum, diam commodo egestas
                        rhoncus, turpis nisi consectetur nibh, in vehicula eros
                        orci vel neque.
                      </p>
                      <div className="post-options">
                        <div className="row">
                          <div className="col-6">
                            <ul className="post-tags">
                              <li>
                                <i className="fa fa-tags"></i>
                              </li>
                              <li>
                                <a href="#">HTML CSS</a>,
                              </li>
                              <li>
                                <a href="#">Photoshop</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul className="post-share">
                              <li>
                                <i className="fa fa-share-alt"></i>
                              </li>
                              <li>
                                <a href="#">Facebook</a>,
                              </li>
                              <li>
                                <a href="#">Twitter</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button">
                    <a href="blog.html">View All Posts</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </section>
  );
}

export default Content;
