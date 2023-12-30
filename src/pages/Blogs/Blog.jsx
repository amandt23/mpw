import React, { useEffect, useState } from 'react'
import './blog.css'
import BlogCard from './BlogCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CardSkeleton from '../../components/LoadingSkeleton/CardSkeleton'
import { Helmet } from 'react-helmet'

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Function to fetch data from the API using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('https://myperfectwriting.co.uk/mpwblogportal/controller/blogs.php?action=getAllBlogs');
        setBlogs(response.data); // Assuming data is an array of blogs
        setLoading(false)
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures useEffect runs once when the component mounts

  console.log("blogs al", blogs);

  return (
<>
<Helmet>

                <title>Blog | Insightful Essay Writing Service in UK</title>
                <meta name="description" content="Explore our Blog for the latest insights on Essay Writing Service in UK. Tips, trends, and academic guidance from My Perfect Writing." />

                <meta name="keywords" content="Blog on Essay Writing Service UK, Academic Writing Tips UK, UK Essay Service Insights, My Perfect Writing Blog Updates"></meta>

                <link rel="canonical" href="https://www.myperfectwriting.co.uk/blog" />

<script type="application/ld+json">
    {`
  {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://myperfectwriting.co.uk/"
    }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://myperfectwriting.co.uk/blog"
    }]
}`}
</script>
</Helmet>
    <div className="blogSection">
      <div className="blogHeader">
        <div className="blogHeaderTop">
          <p>Home<span> / Blog</span></p>
          {/* <div className="blogHeaderSearch">
            <div className="HeaderSearch">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M35.0003 34.9999L27.762 27.7615M27.762 27.7615C29.0002 26.5234 29.9823 25.0535 30.6524 23.4358C31.3225 21.818 31.6674 20.0842 31.6674 18.3332C31.6674 16.5822 31.3225 14.8483 30.6524 13.2306C29.9823 11.6129 29.0002 10.143 27.762 8.90486C26.5239 7.66671 25.054 6.68456 23.4363 6.01448C21.8185 5.3444 20.0847 4.99951 18.3337 4.99951C16.5827 4.99951 14.8488 5.3444 13.2311 6.01448C11.6134 6.68456 10.1435 7.66671 8.90534 8.90486C6.40479 11.4054 5 14.7969 5 18.3332C5 21.8695 6.40479 25.261 8.90534 27.7615C11.4059 30.2621 14.7974 31.6669 18.3337 31.6669C21.87 31.6669 25.2615 30.2621 27.762 27.7615Z" stroke="#96AFCE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
              <input type="text" placeholder='Search...' />
              </div>
            <hr />
          </div> */}
        </div>
        <div className="blogHBottom">
          <h1>Essay writing with EssayPro</h1>
          <p>You don't have to worry about pressing deadlines and sleepless nights. Our essay writing service pros love to share valuable tips, making your life much simpler. Some of tips and a lot of other useful information, you can find on our blog. So, enjoy the goldmine of information and ace your academic assignments stress-free. </p>
          <hr />
        </div>
      </div>

      <div className="blogHeaderSearch">
        <div className="HeaderSearch">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M35.0003 34.9999L27.762 27.7615M27.762 27.7615C29.0002 26.5234 29.9823 25.0535 30.6524 23.4358C31.3225 21.818 31.6674 20.0842 31.6674 18.3332C31.6674 16.5822 31.3225 14.8483 30.6524 13.2306C29.9823 11.6129 29.0002 10.143 27.762 8.90486C26.5239 7.66671 25.054 6.68456 23.4363 6.01448C21.8185 5.3444 20.0847 4.99951 18.3337 4.99951C16.5827 4.99951 14.8488 5.3444 13.2311 6.01448C11.6134 6.68456 10.1435 7.66671 8.90534 8.90486C6.40479 11.4054 5 14.7969 5 18.3332C5 21.8695 6.40479 25.261 8.90534 27.7615C11.4059 30.2621 14.7974 31.6669 18.3337 31.6669C21.87 31.6669 25.2615 30.2621 27.762 27.7615Z" stroke="#96AFCE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <input type="text" placeholder='Search...' />
        </div>
        <hr />
      </div>

      {/* All bloging section  */}
      <div className="blogingSection">
        <div className="blogSidebar">
          <div className="all-posts-left">
            <p><strong>All Post</strong></p>
            <ul>
              <li>Essay Writing Tips</li>
              <li>Types of Essays</li>
              <li>Research and Citations</li>
              <li>Dissertation and Thesis Guidance</li>
              <li>How To Guides</li>
              <li>Admission and Application Essays</li>
            </ul>
          </div>
          <div class="blog-sidebar-vertical-line"></div>
        </div>

        <div className="allBlogs">
          {/* <div className="all-blog-top">
            <div className="big-blog-Img">
              <img src="./images/blog1.png" alt="" />
            </div>
            <div className="big-blog-desc">
              <p>Lifestyle</p>
              <h3>Movies to Watch for Halloween: The Ultimate Halloween Movie 2023 List</h3>
              <h4><strong>Auther: </strong>Muhammad Faheem</h4>
              <div className="blog-info">
              <div className="info-left">
                  <p>October 18, 2023</p>
                  </div>
                <div className="info-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 4.5C5.60218 4.5 5.22064 4.65804 4.93934 4.93934C4.65804 5.22064 4.5 5.60218 4.5 6C4.5 6.39782 4.65804 6.77936 4.93934 7.06066C5.22064 7.34196 5.60218 7.5 6 7.5C6.39782 7.5 6.77936 7.34196 7.06066 7.06066C7.34196 6.77936 7.5 6.39782 7.5 6C7.5 5.60218 7.34196 5.22064 7.06066 4.93934C6.77936 4.65804 6.39782 4.5 6 4.5ZM6 8.5C5.33696 8.5 4.70107 8.23661 4.23223 7.76777C3.76339 7.29893 3.5 6.66304 3.5 6C3.5 5.33696 3.76339 4.70107 4.23223 4.23223C4.70107 3.76339 5.33696 3.5 6 3.5C6.66304 3.5 7.29893 3.76339 7.76777 4.23223C8.23661 4.70107 8.5 5.33696 8.5 6C8.5 6.66304 8.23661 7.29893 7.76777 7.76777C7.29893 8.23661 6.66304 8.5 6 8.5ZM6 2.25C3.5 2.25 1.365 3.805 0.5 6C1.365 8.195 3.5 9.75 6 9.75C8.5 9.75 10.635 8.195 11.5 6C10.635 3.805 8.5 2.25 6 2.25Z" fill="#96AFCE" />
                </svg>
                  <p>10 minutes</p>
                </div>
              </div>
              <div className="blog-tags">
                <h3>Tags:</h3>
                <div className="blog-all-tags">
                <p>tag1</p>
                  <p>tag2</p>
                  <p>tag3</p>
                  </div>
                  </div>
              <Link to="/blog/:id" className="read-more-button">
                <button>Read more</button>
              </Link>
              </div>
          </div> */}

          {loading ?
            (
              <div className="card-loading-skeletons">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </div>
            ) : (
              <>
                <div className="all-blog-list">
                  {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />

                  ))}

                </div>
              </>
            )

          }

          {/* <div className="all-blog-top bottom-Big-card">
            <div className="big-blog-Img">
            <img src="./images/blog1.png" alt="" />
            </div>
            <div className="big-blog-desc">
              <p>Lifestyle</p>
              <h3>Movies to Watch for Halloween: The Ultimate Halloween Movie 2023 List</h3>
              <h4><strong>Auther: </strong>Muhammad Faheem</h4>
              <div className="blog-info">
                <div className="info-left">
                  <p>October 18, 2023</p>
                </div>
                <div className="info-right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 4.5C5.60218 4.5 5.22064 4.65804 4.93934 4.93934C4.65804 5.22064 4.5 5.60218 4.5 6C4.5 6.39782 4.65804 6.77936 4.93934 7.06066C5.22064 7.34196 5.60218 7.5 6 7.5C6.39782 7.5 6.77936 7.34196 7.06066 7.06066C7.34196 6.77936 7.5 6.39782 7.5 6C7.5 5.60218 7.34196 5.22064 7.06066 4.93934C6.77936 4.65804 6.39782 4.5 6 4.5ZM6 8.5C5.33696 8.5 4.70107 8.23661 4.23223 7.76777C3.76339 7.29893 3.5 6.66304 3.5 6C3.5 5.33696 3.76339 4.70107 4.23223 4.23223C4.70107 3.76339 5.33696 3.5 6 3.5C6.66304 3.5 7.29893 3.76339 7.76777 4.23223C8.23661 4.70107 8.5 5.33696 8.5 6C8.5 6.66304 8.23661 7.29893 7.76777 7.76777C7.29893 8.23661 6.66304 8.5 6 8.5ZM6 2.25C3.5 2.25 1.365 3.805 0.5 6C1.365 8.195 3.5 9.75 6 9.75C8.5 9.75 10.635 8.195 11.5 6C10.635 3.805 8.5 2.25 6 2.25Z" fill="#96AFCE" />
                  </svg>
                  <p>10 minutes</p>
                </div>
              </div>
              <div className="blog-tags">
                <h3>Tags:</h3>
                <div className="blog-all-tags">
                  <p>tag1</p>
                  <p>tag2</p>
                  <p>tag3</p>
                </div>
              </div>
              <div className="read-more-button">
                <button>Read more</button>
                </div>
                </div>
                </div>

          <div className="all-blog-top bottom-Big-card">
            <div className="big-blog-Img">
              <img src="./images/blog1.png" alt="" />
              </div>
              <div className="big-blog-desc">
              <p>Lifestyle</p>
              <h3>Movies to Watch for Halloween: The Ultimate Halloween Movie 2023 List</h3>
              <h4><strong>Auther: </strong>Muhammad Faheem</h4>
              <div className="blog-info">
                <div className="info-left">
                  <p>October 18, 2023</p>
                </div>
                <div className="info-right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 4.5C5.60218 4.5 5.22064 4.65804 4.93934 4.93934C4.65804 5.22064 4.5 5.60218 4.5 6C4.5 6.39782 4.65804 6.77936 4.93934 7.06066C5.22064 7.34196 5.60218 7.5 6 7.5C6.39782 7.5 6.77936 7.34196 7.06066 7.06066C7.34196 6.77936 7.5 6.39782 7.5 6C7.5 5.60218 7.34196 5.22064 7.06066 4.93934C6.77936 4.65804 6.39782 4.5 6 4.5ZM6 8.5C5.33696 8.5 4.70107 8.23661 4.23223 7.76777C3.76339 7.29893 3.5 6.66304 3.5 6C3.5 5.33696 3.76339 4.70107 4.23223 4.23223C4.70107 3.76339 5.33696 3.5 6 3.5C6.66304 3.5 7.29893 3.76339 7.76777 4.23223C8.23661 4.70107 8.5 5.33696 8.5 6C8.5 6.66304 8.23661 7.29893 7.76777 7.76777C7.29893 8.23661 6.66304 8.5 6 8.5ZM6 2.25C3.5 2.25 1.365 3.805 0.5 6C1.365 8.195 3.5 9.75 6 9.75C8.5 9.75 10.635 8.195 11.5 6C10.635 3.805 8.5 2.25 6 2.25Z" fill="#96AFCE" />
                  </svg>
                  <p>10 minutes</p>
                </div>
              </div>
              <div className="blog-tags">
                <h3>Tags:</h3>
                <div className="blog-all-tags">
                  <p>tag1</p>
                  <p>tag2</p>
                  <p>tag3</p>
                </div>
              </div>
              <div className="read-more-button">
                <button>Read more</button>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
              </>
  )
}

export default Blog