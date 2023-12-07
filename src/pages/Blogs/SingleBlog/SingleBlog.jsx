import React, { useEffect, useState } from 'react'
import './singleBlog.css'
import { Helmet } from "react-helmet";
import blog1Profile from '../../../BlogImages/blogProfile.png'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import SingleBlogSkeleton from '../../../components/LoadingSkeleton/SingleBlog/SingleBlogSkeleton';

import { FacebookShareButton, InstapaperShareButton, TwitterShareButton } from 'react-share';


const SingleBlog = () => {
    const { title } = useParams();

    // getting current url of blog
    const shareUrl = "https://myperfectwriting.co.uk/blog/Online-Education-and-the-Rise-of-Remote-Learning";

    const [singleBlog, setSingleBlog] = useState();
    const [loading, setLoading] = useState(true);

    const decodedTitle = decodeURIComponent(title.replace(/-/g, ' '));


    useEffect(() => {
        const apiUrl = `https://myperfectwriting.co.uk/mpwblogportal/controller/blogs.php?action=getBlogByTitle&title=${decodedTitle}`;
        console.log("hello api inside");

        axios.get(apiUrl)
            .then((response) => {
                const data = response.data; // Extract the array of client data
                setSingleBlog(data);

            })
            .catch((error) => {
                console.error("Error fetching client data:", error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false regardless of success or failure
            });
    }, []);

    if (loading) {
        return <SingleBlogSkeleton />;
    }

    // const shareOnFacebook = () => {
    //     // Replace 'YourShareURL' with the actual URL you want to share
    //     const shareUrl = { currentUrl };
    //     window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    // };

    console.log("useparam", shareUrl);

    return (
        <>
            <Helmet>
                <meta name="description" content={singleBlog[0].metadescription} />
            </Helmet>

            <div className="singleBlog-Container">
                <div className="single-blog-contents">


                    {/* Side Bar  */}
                    <div className="side-bar-container">

                        <div className="Single-blogSidebar">
                            <div className="single-all-posts-left">
                                <h3>On This Page</h3>
                                <hr />
                                <ul>
                                    <li>Overview</li>
                                    <li>How Do You Write a Phd Essay?</li>
                                    <li>Have a Strong Personal Statement</li>
                                    <li>PhD Essay Format</li>

                                </ul>
                                <div className="singleBlogSocialIcon">
                                    <p style={{ fontSize: "18px" }}>Share this article</p>
                                    <div className="shareArticel">
                                        <FacebookShareButton url={shareUrl}>
                                            <FaFacebook className='BlogSingleIcon' />
                                        </FacebookShareButton>

                                        <TwitterShareButton url={shareUrl}>
                                            <FaSquareXTwitter className='BlogSingleIcon' />
                                        </TwitterShareButton>
                                        <FacebookShareButton url={shareUrl}>
                                            <RiInstagramFill className='BlogSingleIcon' />
                                        </FacebookShareButton>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="Single-blogSidebar sidebarBottomSect">
                        <div className="single-all-posts-left">
                            <h3>References</h3>
                            <p>Citation: APA</p>
                            <hr />
                            <ul>
                                <li>Overview</li>
                                <li>How Do You Write a Phd Essay?</li>
                                <li>Have a Strong Personal Statement</li>
                                <li>PhD Essay Format</li>

                            </ul>
                        </div>
                    </div> */}
                    </div>


                    {/* blog section  */}

                    <div className="singlBlogSection">

                        <div className="singleBlogTop">
                            <h3>{singleBlog[0].blogtitle}</h3>
                            {/* <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to.</p> */}
                            <h2>“BUSINESS” </h2>
                            <img className='singleBlogImg' src={`https://myperfectwriting.co.uk/mpwblogportal/blogimages/${singleBlog[0].image}`} alt="blog-image" />
                        </div>

                        <div className="singleBlogBottom">
                            <div className="single-blog-keywords">
                                <div className="keywords">
                                    <h3>Keywords: </h3>
                                    <p>Essay</p>
                                    <p>Chemestry</p>
                                    <p>Lab Report</p>
                                </div>
                                <div className="wordCount">
                                    <p><strong>Word Count:</strong> 1500</p>
                                </div>
                            </div>
                            <hr />

                            <div className="blogDetails">
                                <div className="published">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                        <path d="M5.625 9.375L4.96875 10.0312L6.1875 11.25H1.875V12.1875H6.1875L4.96875 13.4062L5.625 14.0625L7.96875 11.7188L5.625 9.375ZM8.4375 7.03125H4.6875V7.96875H8.4375V7.03125ZM8.4375 3.75H4.6875V4.6875H8.4375V3.75Z" fill="#777777" />
                                        <path d="M8.90625 13.125H11.25V11.25H10.3125V10.3125H11.25V7.96875H10.3125V7.03125H11.25V4.6875H10.3125V3.75H11.25V1.875H2.8125V9.375H1.875V1.875C1.875 1.35938 2.29688 0.9375 2.8125 0.9375H11.25C11.7656 0.9375 12.1875 1.35938 12.1875 1.875V3.75H13.125V4.6875H12.1875V7.03125H13.125V7.96875H12.1875V10.3125H13.125V11.25H12.1875V13.125C12.1875 13.6406 11.7656 14.0625 11.25 14.0625H8.90625V13.125Z" fill="#777777" />
                                    </svg>
                                    <h3>Published on:</h3>
                                    <p>May 16, 2023</p>
                                </div>
                                <div className="updated">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M12.4007 13H14.0007V14.3333H10.0007V10.3333H11.334V12.1533C12.554 11.1733 13.334 9.68 13.334 8C13.334 5.28667 11.294 3.04 8.66732 2.71333V1.36667C12.034 1.7 14.6673 4.54 14.6673 8C14.6673 9.99333 13.7873 11.78 12.4007 13ZM2.66732 8C2.66732 6.32 3.44732 4.82 4.66732 3.84667V5.66667H6.00065V1.66667H2.00065V3H3.60065C2.88839 3.62379 2.31767 4.39261 1.92675 5.25494C1.53583 6.11727 1.33372 7.0532 1.33398 8C1.33398 11.46 3.96732 14.3 7.33398 14.6333V13.2867C4.70732 12.96 2.66732 10.7133 2.66732 8ZM10.8273 5.40667L7.05398 9.18L5.16732 7.29333L4.22732 8.23333L7.05398 11.06L11.7673 6.34667L10.8273 5.40667Z" fill="#777777" />
                                    </svg>
                                    <h3>Last updated: </h3>
                                    <p>Apr 1, 2023</p>
                                </div>
                                <div className="blogTime">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                        <path d="M5.67087 2.33194C5.26069 2.33194 4.8673 2.49573 4.57726 2.78728C4.28721 3.07883 4.12427 3.47426 4.12427 3.88657C4.12427 4.29888 4.28721 4.69431 4.57726 4.98586C4.8673 5.27741 5.26069 5.4412 5.67087 5.4412C6.08105 5.4412 6.47444 5.27741 6.76448 4.98586C7.05453 4.69431 7.21747 4.29888 7.21747 3.88657C7.21747 3.47426 7.05453 3.07883 6.76448 2.78728C6.47444 2.49573 6.08105 2.33194 5.67087 2.33194ZM5.67087 6.47762C4.98723 6.47762 4.33159 6.20463 3.84818 5.71872C3.36478 5.2328 3.0932 4.57376 3.0932 3.88657C3.0932 3.19938 3.36478 2.54034 3.84818 2.05442C4.33159 1.56851 4.98723 1.29552 5.67087 1.29552C6.35451 1.29552 7.01015 1.56851 7.49356 2.05442C7.97696 2.54034 8.24854 3.19938 8.24854 3.88657C8.24854 4.57376 7.97696 5.2328 7.49356 5.71872C7.01015 6.20463 6.35451 6.47762 5.67087 6.47762ZM5.67087 0C3.0932 0 0.891873 1.61163 0 3.88657C0.891873 6.16151 3.0932 7.77314 5.67087 7.77314C8.24854 7.77314 10.4499 6.16151 11.3417 3.88657C10.4499 1.61163 8.24854 0 5.67087 0Z" fill="#777777" />
                                    </svg>
                                    <p>10 minutes</p>
                                </div>
                            </div>

                            <hr className='blogDetailHr' />

                            <div className="blog-profile">

                                <div className="profileTop">
                                    <div className="profile-top1">
                                        <h3>Written By</h3>
                                        <img src={blog1Profile} alt="blog-image" />
                                        <h2>{singleBlog[0].author}</h2>
                                    </div>
                                    {/* <h2>Founder and CEO</h2> */}
                                </div>
                                <div className="profile-refrence">
                                    {/* <div className="Single-blogSidebar sidebarBottomSect"> */}
                                    <div className="single-all-posts-left">
                                        <h3>References</h3>
                                        <p>Citation: APA</p>
                                        {/* <hr /> */}
                                        {/* <ul>
                                            <li>Overview</li>
                                            <li>How Do You Write a Phd Essay?</li>
                                            <li>Have a Strong Personal Statement</li>
                                            <li>PhD Essay Format</li>

                                        </ul> */}
                                    </div>
                                    {/* </div> */}
                                </div>

                            </div>

                            <div className="profileDesc">
                                <p>{singleBlog[0].authorbio}</p>
                            </div>

                            <div className="blogContents">
                                <div dangerouslySetInnerHTML={{ __html: singleBlog[0].blogtext }} />
                            </div>


                        </div>
                    </div>


                </div>


            </div >

        </>

    )
}

export default SingleBlog