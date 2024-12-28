import "./ListPost.scss";
import Sidebar from "../../Sidebar";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { loadAllPosts } from "../../../../services/api/post-service-v1";
import FormatDateTime from "../../../Common/FormatDateTime";
import Pagination from "../../../Common/Pagination";

function ShowListPost(props) {
  return (
    <div className="blog-post">
      <div className="blog-thumb">
        <img className="img-list" src={props.post.image_url} alt="" />
        {/* <img src={blog_post_01} alt="" /> */}
      </div>
      <div className="down-content">
        <NavLink to={`/content-detail/${props.post.id}`}>
          <h4>{props.post.title}</h4>
        </NavLink>
        <a href="post-details.html"></a>
        <ul className="post-info">
          <li>
            <a href="#">Admin</a>
          </li>
          <li>
            <span><FormatDateTime dateString={props.post.created_at}/></span>
          </li>
        </ul>
        {/* <p>{props.post.content}</p> */}
        <div className="post-options">
          <div className="row">
            <div className="col-6">
              <ul className="post-tags">
                <li>
                  <i className="fa fa-tags"></i>
                </li>
                <li>
                  <a href="#">{props.post.category}</a>
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
                  <a href="#">Zalo group</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListPost() {
  const [listPost, setListPost] = useState([]);
  const [metaPagination, setMetaPagination] = useState([]);

  const fetchPosts = (page = 1) => {
    loadAllPosts({page: page})
      .then((posts) => {
        setListPost(posts.data);
        setMetaPagination(posts.meta);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  const handlePageChange = (page) => {
    fetchPosts(page);
  };

  useEffect(() => {
    fetchPosts(); 
  }, [])

  return (
    <section className="blog-posts header-text">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="all-blog-posts">
              <div className="row">
                <div className="col-lg-12">
                  {listPost.map((post, index) => (
                    <ShowListPost post={post} key={index}></ShowListPost>
                  ))}
                </div>
                {metaPagination.total_pages > 1 && (
                  <Pagination meta={metaPagination} onPageChange={handlePageChange} />
                )}
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </section>
  );
}

export default ListPost;
