import "./ListPost.scss";
import {
  loadAllPosts,
  deletePost,
} from "../../../../services/admin/post-service";

import { useState, useEffect, useCallback } from "react";
import ModalDelete from "../../../Common/ModalDelete";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import debounce from "lodash.debounce";
import FormatDateTime from "../../../Common/FormatDateTime";
import Pagination from "../../../Common/Pagination";
import SearchBar from "../../../Client/SearchBar";

function ShowListPost(props) {
  const { post, fetchPosts } = props;

  const doDeletePost = (postId) => {
    deletePost(postId)
      .then(() => {
        toast.success("Remove success!");
        fetchPosts();
      })
      .catch(() => {
        toast.error("Remove failed!");
      });
  };

  return (
    <tr>
      <th scope="row">{post.id}</th>
      <td>{post.title}</td>
      <td>{post.category}</td>
      <td>{post.status}</td>
      <td>
        <FormatDateTime dateString={post.created_at} />
      </td>
      <td>
        <div className="action-btn flex space-x-4">
          <NavLink
            to={`/admin/update-post/${post.id}`}
            className="block text-white bg-green-600 hover:bg-green-700 focus:ring-4
            focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center"
          >
            <FontAwesomeIcon icon={faPencil} size="lg" />
          </NavLink>
          <ModalDelete
            id={post.id}
            deleteAction={doDeletePost}
            message="Are you sure you want to delete this post?"
            isShowText={false}
          />
        </div>
      </td>
    </tr>
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
    <div className="mt-3">
      <SearchBar onSearch={handleSearch}></SearchBar>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Status</th>
            <th scope="col">Created at</th>
            <th scope="col" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {listPost.map((post, index) => (
            <ShowListPost
              post={post}
              key={index}
              fetchPosts={fetchPosts}
            />
          ))}
          {metaPagination.total_pages > 1 && (
            <Pagination meta={metaPagination} onPageChange={handlePageChange} />
          )}
        </tbody>
      </table>
    </div>
  );
}


export default ListPost;
