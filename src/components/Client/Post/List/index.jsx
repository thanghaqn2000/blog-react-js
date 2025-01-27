import "./ListPost.scss";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import FormatDateTime from "../../../Common/FormatDateTime";
import Button from "../../../Items/Button";
import Sidebar from "../../Sidebar";
import { loadAllPosts } from "../../../../services/api/post-service-v1";
import Banner from "../../Banner";


function ShowListPost({post, type}) {
  const { id, title, image_url, created_at, category } = post;

  return (
<div className="pl-1 pr-1 blog-post hover:bg-gray-100">
  <div className="flex flex-col md:flex-row items-start gap-4 p-4 border rounded-lg shadow-sm">
    {/* Hình ảnh bài viết */}
    <div className="flex-shrink-0 md:w-1/3 w-full">
      <img
        src={image_url}
        alt=""
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>

    {/* Nội dung bài viết */}
    <div className="flex-grow md:w-2/3 w-full">
      <NavLink to={`/content-detail/${id}`}>
        <h4 className="font-bold text-blue-800 hover:text-green-600 text-lg md:text-xl">
          {title}
        </h4>
      </NavLink>
      <div className="brief-desc text-gray-700 text-sm md:text-base mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit rerum veritatis deserunt?
      </div>
      <div className="down-content mt-3">
        <ul className="post-info flex items-center text-gray-500 text-xs md:text-sm gap-1">
          <li>
            <a href="/" className="hover:underline">Admin</a>
          </li>
          <li>
            <span><FormatDateTime dateString={created_at} /></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  );
}

function ListPost() {
  const [listPost, setListPost] = useState([]);

  const fetchPosts = (page = 1, per_page = 3, title = "") => {
    loadAllPosts({ page: page, per_page: per_page, title: title })
      .then((posts) => {
        setListPost(posts.data);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="blog-posts header-text">
      <Banner></Banner>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
              {/* <div className="search-bar" style={{ marginLeft: "100px", marginBottom: "20px" }}>
                <SearchBar onSearch={handleSearch}></SearchBar>
              </div> */}
            <div className="all-blog-posts border-1 border-zinc-300">
              <div className="row">
              <div className="col-lg-12 flex flex-col">
                <div className="label-category text-white font-bold text-center mb-2 mt-2">
                  Nhận định thị trường
                </div>
                  {listPost.map((post, index) => (
                    <ShowListPost post={post} key={index}></ShowListPost>
                  ))}
                  <div className="flex justify-center pb-3">
                    <Button 
                      text="Xem thêm" 
                      icon={faArrowRight} 
                      variant="warning" 
                      size="md" 
                      iconPosition="right" 
                      additionalClasses="mt-2" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="all-blog-posts border-1 border-zinc-300">
              <div className="row">
                <div className="col-lg-12 flex flex-col">
                <div className="label-category text-white font-bold text-center mb-2 mt-2">
                  Nhận định thị trường
                </div>
                  {listPost.map((post, index) => (
                    <ShowListPost post={post} key={index}></ShowListPost>
                  ))}
                  <div className="flex justify-center pb-3">
                    <Button 
                      text="Xem thêm" 
                      icon={faArrowRight} 
                      variant="warning" 
                      size="md" 
                      iconPosition="right" 
                      additionalClasses="mt-2" 
                      onClick={() => console.log("Xem thêm clicked")} 
                    />
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

export default ListPost;
