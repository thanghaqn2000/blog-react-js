import "./ContentDetail.scss";
import Sidebar from "../Sidebar";
import blog_post_01 from "/src/images/blog-post-01.jpg";

function ContentDetail() {
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
                      <span>Lifestyle</span>
                      <a href="post-details.html">
                        <h4>Aenean pulvinar gravida sem nec</h4>
                      </a>
                      <ul className="post-info">
                        <li>
                          <a href="#">Admin</a>
                        </li>
                        <li>
                          <a href="#">May 12, 2020</a>
                        </li>
                        <li>
                          <a href="#">10 Comments</a>
                        </li>
                      </ul>
                      <p>
                        You can browse different tags such as
                        <a
                          rel="nofollow"
                          href="https://templatemo.com/tag/multi-page"
                          target="_parent"
                        >
                          multi-page
                        </a>
                        ,
                        <a
                          rel="nofollow"
                          href="https://templatemo.com/tag/resume"
                          target="_parent"
                        >
                          resume
                        </a>
                        ,
                        <a
                          rel="nofollow"
                          href="https://templatemo.com/tag/video"
                          target="_parent"
                        >
                          video
                        </a>
                        ,etc. to see more CSS templates. Sed hendrerit rutrum
                        arcu, non malesuada nisi. Sed id facilisis turpis. Donec
                        justo elit, dapibus vel ultricies in, molestie sit amet
                        risus. In nunc augue, rhoncus sed libero et, tincidunt
                        tempor nisl. Donec egestas, quam eu rutrum ultrices,
                        sapien ante posuere nisl, ac eleifend eros orci vel
                        ante. Pellentesque vitae eleifend velit. Etiam blandit
                        felis sollicitudin vestibulum feugiat. <br></br>
                        <h3>I. Muc luc 1</h3>
                        Donec tincidunt leo nec magna gravida varius.
                        Suspendisse felis orci, egestas ac sodales quis,
                        venenatis et neque. Vivamus facilisis dignissim arcu et
                        blandit. Maecenas finibus dui non pulvinar lacinia. Ut
                        lacinia finibus lorem vel porttitor. Suspendisse et
                        metus nec libero ultrices varius eget in risus. Cras id
                        nibh at erat pulvinar malesuada et non ipsum.
                        Suspendisse id ipsum leo.
                        <img src={blog_post_01} alt="" />
                        <br></br>
                        <br></br>
                        <h3>II. Muc luc 2</h3>
                        Donec tincidunt leo nec magna gravida varius.
                        Suspendisse felis orci, egestas ac sodales quis,
                        venenatis et neque. Vivamus facilisis dignissim arcu et
                        blandit. Maecenas finibus dui non pulvinar lacinia. Ut
                        lacinia finibus lorem vel porttitor. Suspendisse et
                        metus nec libero ultrices varius eget in risus. Cras id
                        nibh at erat pulvinar malesuada et non ipsum.
                        Suspendisse id ipsum leo.

                        <br></br>
                        <br></br>
                        <h3>III. Muc luc 3</h3>
                        Donec tincidunt leo nec magna gravida varius.
                        Suspendisse felis orci, egestas ac sodales quis,
                        venenatis et neque. Vivamus facilisis dignissim arcu et
                        blandit. Maecenas finibus dui non pulvinar lacinia. Ut
                        lacinia finibus lorem vel porttitor. Suspendisse et
                        metus nec libero ultrices varius eget in risus. Cras id
                        nibh at erat pulvinar malesuada et non ipsum.
                        Suspendisse id ipsum leo.
                        <img src={blog_post_01} alt="" />
                      </p>
                      <div className="post-options">
                        <div className="row">
                          <div className="col-6">
                            <ul className="post-tags">
                              <li>
                                <i className="fa fa-tags"></i>
                              </li>
                              <li>
                                <a href="#">Best Templates</a>,
                              </li>
                              <li>
                                <a href="#">TemplateMo</a>
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
