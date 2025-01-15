import "./ContentDetail.scss";
import Sidebar from "../../Sidebar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { loadPost } from '../../../../services/api/post-service-v1';
import blog_post_01 from "../../../../assets/images/blog-post-02.jpg";
import FormatDateTime from "../../../Common/FormatDateTime";

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
                    <div className="down-content">
                      <div className="info-header flex justify-between items-center w-full mb-3">
                        <ul className="post-tags">
                          <li>
                            <i className="fa fa-tags"></i>
                          </li>
                          <li>
                            <a href="#" className="text-lg">{post.category}</a>
                          </li>
                        </ul>
                        <ul className="post-info flex gap-2 list-none">
                          <li>
                            <span className="text-lg font-bold">Đức Toàn</span>
                          </li>
                          <li>
                            <p className="text-lg font-normal text-slate-500"><FormatDateTime dateString={post.created_at} /></p>
                          </li>
                        </ul>
                      </div>
                      <h1>{post.title}</h1>
                      <div className="main-content">
                        <p dangerouslySetInnerHTML={{ __html: post.content }}>
                        </p>
                      </div>
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
