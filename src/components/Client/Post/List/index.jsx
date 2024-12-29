import "./ListPost.scss";
import Sidebar from "../../Sidebar";
import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import debounce from "lodash.debounce";
import { loadAllPosts } from "../../../../services/api/post-service-v1";
import FormatDateTime from "../../../Common/FormatDateTime";
import Pagination from "../../../Common/Pagination";
import SearchBar from "../../SearchBar";

function ShowListPost(props) {
  return (
    <div className="blog-post">
      <div className="blog-thumb">
        <img className="img-list" src={props.post.image_url} alt="" />
      </div>
      <div className="down-content">
        <NavLink to={`/content-detail/${props.post.id}`}>
          <h4>{props.post.title}</h4>
        </NavLink>
        <ul className="post-info">
          <li>
            <a href="#">Admin</a>
          </li>
          <li>
            <span><FormatDateTime dateString={props.post.created_at} /></span>
          </li>
        </ul>
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
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPosts = (page = 1, title = "") => {
    loadAllPosts({ page: page, title: title })
      .then((posts) => {
        setListPost(posts.data);
        setMetaPagination(posts.meta);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  const debouncedFetchPosts = useCallback(
    debounce((search) => fetchPosts(1, search), 500),
    []
  );

  const handleSearch = (search) => {
    setSearchTerm(search);
    debouncedFetchPosts(search);
  };

  const handlePageChange = (page) => {
    fetchPosts(page, searchTerm);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="blog-posts header-text">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="search-bar" style={{ marginLeft: "100px", marginBottom: "20px" }}>
              <SearchBar onSearch={handleSearch}></SearchBar>
            </div>
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
