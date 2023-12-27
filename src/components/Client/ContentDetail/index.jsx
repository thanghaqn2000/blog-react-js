import "./ContentDetail.scss";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { loadPost } from '../../../services/api/post-service-v1';

import blog_post_01 from "../../../assets/images/blog-post-02.jpg";

function ContentDetail(props) {
  const { postId } = useParams()
  const [post, setPost] = useState({ id: 1 });
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPost(postId)
    .then((data) => {
      setPost(data);
    })
    .catch(() => {
      toast.error("Error in loading post");
    })
    .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return null
  }

  return (
    <section className="blog-posts grid-system">
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
                      <span>{post.category}</span>
                      <a href="post-details.html">
                        <h4>{post.title}</h4>
                      </a>
                      <ul className="post-info">
                        <li>
                          <a href="#">Admin</a>
                        </li>
                        <li>
                          <a href="#">{post.created_at}</a>
                        </li>
                      </ul>
                      <p dangerouslySetInnerHTML={{ __html: post.content }}>
                      </p>
                      <div className="post-options">
                        <div className="row">
                          <div className="col-6">
                            <ul className="post-tags">
                              <li>
                                <i className="fa fa-tags"></i>
                              </li>
                              <li>
                                <a href="#">Facebook  </a>,
                              </li>
                              <li>
                                <a href="#">Zalo</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="sidebar-item comments">
                    <div className="sidebar-heading">
                      <h2>4 comments</h2>
                    </div>
                    <div className="content">
                      <ul>
                        <li>
                          <div className="author-thumb">
                            <img src={blog_post_01} alt="" />
                          </div>
                          <div className="right-content">
                            <h4>
                              Charles Kate<span>May 16, 2020</span>
                            </h4>
                            <p>
                              Fusce ornare mollis eros. Duis et diam vitae justo
                              fringilla condimentum eu quis leo. Vestibulum id
                              turpis porttitor sapien facilisis scelerisque.
                              Curabitur a nisl eu lacus convallis eleifend
                              posuere id tellus.
                            </p>
                          </div>
                        </li>
                        <li className="replied">
                          <div className="author-thumb">
                            <img src={blog_post_01} alt="" />
                          </div>
                          <div className="right-content">
                            <h4>
                              Thirteen Man<span>May 20, 2020</span>
                            </h4>
                            <p>
                              In porta urna sed venenatis sollicitudin. Praesent
                              urna sem, pulvinar vel mattis eget.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="author-thumb">
                            <img src={blog_post_01} alt="" />
                          </div>
                          <div className="right-content">
                            <h4>
                              Belisimo Mama<span>May 16, 2020</span>
                            </h4>
                            <p>
                              Nullam nec pharetra nibh. Cras tortor nulla,
                              faucibus id tincidunt in, ultrices eget ligula.
                              Sed vitae suscipit ligula. Vestibulum id turpis
                              volutpat, lobortis turpis ac, molestie nibh.
                            </p>
                          </div>
                        </li>
                        <li className="replied">
                          <div className="author-thumb">
                            <img src={blog_post_01} alt="" />
                          </div>
                          <div className="right-content">
                            <h4>
                              Thirteen Man<span>May 22, 2020</span>
                            </h4>
                            <p>
                              Mauris sit amet justo vulputate, cursus massa
                              congue, vestibulum odio. Aenean elit nunc, gravida
                              in erat sit amet, feugiat viverra leo.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="sidebar-item submit-comment">
                    <div className="sidebar-heading">
                      <h2>Your comment</h2>
                    </div>
                    <div className="content">
                      <form id="comment" action="#" method="post">
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <fieldset>
                              <input
                                name="name"
                                type="text"
                                id="name"
                                placeholder="Your name"
                                required=""
                              />
                            </fieldset>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <fieldset>
                              <input
                                name="email"
                                type="text"
                                id="email"
                                placeholder="Your email"
                                required=""
                              />
                            </fieldset>
                          </div>
                          <div className="col-md-12 col-sm-12">
                            <fieldset>
                              <input
                                name="subject"
                                type="text"
                                id="subject"
                                placeholder="Subject"
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <textarea
                                name="message"
                                rows="6"
                                id="message"
                                placeholder="Type your comment"
                                required=""
                              ></textarea>
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <button
                                type="submit"
                                id="form-submit"
                                className="main-button"
                              >
                                Submit
                              </button>
                            </fieldset>
                          </div>
                        </div>
                      </form>
                    </div>
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

export default ContentDetail;
