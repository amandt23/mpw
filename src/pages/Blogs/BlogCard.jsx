import React from 'react'
import './blog.css'
import { Link } from 'react-router-dom'

const BlogCard = ({blog}) => {
    return (

        <div key={blog.id} className="blog-card">
            <div className="big-blog-Img">
                <img className='list-card-img' src={`https://myperfectwriting.co.uk/mpwblogportal/blogimages/${blog.image}`} alt="" />
            </div>
            <div className="big-blog-desc list-card">
                <p>Lifestyle</p>
                <h2 className='list-card-head'>{blog.blogtitle}</h2>
                <h4><strong>Auther: </strong>{blog.author}</h4>
                <div className="blog-info">
                    <div className="info-left">
                        <p>{blog.creation_date}</p>
                    </div>
                    <div className="info-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 4.5C5.60218 4.5 5.22064 4.65804 4.93934 4.93934C4.65804 5.22064 4.5 5.60218 4.5 6C4.5 6.39782 4.65804 6.77936 4.93934 7.06066C5.22064 7.34196 5.60218 7.5 6 7.5C6.39782 7.5 6.77936 7.34196 7.06066 7.06066C7.34196 6.77936 7.5 6.39782 7.5 6C7.5 5.60218 7.34196 5.22064 7.06066 4.93934C6.77936 4.65804 6.39782 4.5 6 4.5ZM6 8.5C5.33696 8.5 4.70107 8.23661 4.23223 7.76777C3.76339 7.29893 3.5 6.66304 3.5 6C3.5 5.33696 3.76339 4.70107 4.23223 4.23223C4.70107 3.76339 5.33696 3.5 6 3.5C6.66304 3.5 7.29893 3.76339 7.76777 4.23223C8.23661 4.70107 8.5 5.33696 8.5 6C8.5 6.66304 8.23661 7.29893 7.76777 7.76777C7.29893 8.23661 6.66304 8.5 6 8.5ZM6 2.25C3.5 2.25 1.365 3.805 0.5 6C1.365 8.195 3.5 9.75 6 9.75C8.5 9.75 10.635 8.195 11.5 6C10.635 3.805 8.5 2.25 6 2.25Z" fill="#96AFCE" />
                        </svg>
                        <p>{blog.readingtime}</p>
                    </div>
                </div>
                <div className="blog-tags-list-card">
                    <h3>Tags:</h3>
                    <div className="blog-all-tags list-card-tage">
                        <p>tag1</p>
                        <p>tag2</p>
                        <p>tag3</p>
                    </div>
                </div>
                <div className="list-read-more-button">
                    <Link className='Link' to={`/blog/${blog.blog_single_title}`}>
                        <button>Read more</button>
                    </Link>
                </div>
            </div>

        </div>


    )
}

export default BlogCard