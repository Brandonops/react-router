import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogService from "../util/BlogService";

function Blog() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        BlogService.getAll().then(data => {
            setBlogs(data);
        });
    }, []);
    return (
        <div>
            <h1>Blog</h1>
            <div>
                {blogs.map((blog) => {
                    return (
                        <div className="blogPost" key={blog.id}>
                            <h3>{blog.title}</h3>
                            <Link to={`/blog/${blog.id}`}>Read More...</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Blog;