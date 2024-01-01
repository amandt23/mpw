import React, { useEffect, useState } from 'react'
import './singleBlog.css'
import { Helmet } from "react-helmet";
import blog1Profile from '../../../BlogImages/blogProfile.png'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import SingleBlogSkeleton from '../../../components/LoadingSkeleton/SingleBlog/SingleBlogSkeleton';

import { FacebookShareButton,  TwitterShareButton } from 'react-share';


const SingleBlog = () => {
    const { title } = useParams();
    //console.log(title);
    // getting current url of blog
    const shareUrl = "https://myperfectwriting.co.uk/blog/Online-Education-and-the-Rise-of-Remote-Learning";

    const [singleBlog, setSingleBlog] = useState();
    const [loading, setLoading] = useState(true);

    const decodedTitle = decodeURIComponent(title.replace(/-/g, ' '));


    useEffect(() => {
        const apiUrl = `https://myperfectwriting.co.uk/mpwblogportal/controller/blogs.php?action=getBlogByTitle&title=${decodedTitle}`;
        //console.log(apiUrl);

        axios.get(apiUrl)
            .then((response) => {
                const data = response.data; // Extract the array of client data
                setSingleBlog(data);
               // console.log("data", data);
            })
            .catch((error) => {
                console.error("Error fetching client data:", error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false regardless of success or failure
            });
    }, [title]);

    if (loading) {
        return <SingleBlogSkeleton />;
    }

   

    return (
        <>
            <Helmet>
                <title>{singleBlog[0].pagetitle}</title>
                <meta name="description" content={singleBlog[0].metadescription} />

                <link rel="canonical" href={`https://myperfectwriting.co.uk/blog/${singleBlog[0].blogtitle}`}/>

            
                {/* setting shema in head for seo  */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "${singleBlog[1].type}",
              "headline": "${singleBlog[1].headline}",
              "description": "${singleBlog[1].description}",
              "image": "${singleBlog[1].image}",
              "author": {
                "@type": "Person",
                "name": "${singleBlog[1].author.name}"
              },
              "datePublished": "${singleBlog[1].datePublished}",
              "publisher": {
                "@type": "${singleBlog[1].publisher.type}",
                "name": "${singleBlog[1].publisher.name}",
                
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${singleBlog[1].mainEntityOfPage.id}"
              }
            }
          `}
                </script>


            </Helmet>

            <div className="body-wrap">
        <div className="container">
         
            <div className="banner">
               
                <div className="hero-left col-5">

                    <div className="mr-black">
                        <span className="black-written">Written By</span>
                        <img className="blacky-img" src={`https://myperfectwriting.co.uk/mpwblogportal/blogimages/${singleBlog[0].authorimage}`} alt="blog-image"/>
                        {/* <img className="blacky-img" src={blog1Profile} alt="blog-image"/> */}
                        <span className="me-blacky">{singleBlog[0].authorname}</span>
                    </div>
                    <h1>{singleBlog[0].blogtitle}</h1>
                    <p>{singleBlog[0].abstract}</p>
                    <div className="tag-box">
                        <h4>Tags:</h4>
                        <a className="tag-btn" href="#">{singleBlog[0].tag1}</a>
                        <a className="tag-btn" href="#">{singleBlog[0].tag2}</a>
                        <a className="tag-btn" href="#">{singleBlog[0].tag3}</a>
                    </div>
                </div>
               
                <div className="hero-right col-7">
                    <div className="right-banner">
                        <div className="righbanner-img">
                            <img className="left-banner-img" src={`https://myperfectwriting.co.uk/mpwblogportal/blogimages/${singleBlog[0].image}`} alt="blog-image"/>
                        </div>
                        <div className="lab-report">
                            <div className="report-box">
                                <img src="../images/publish-icon.svg" alt=""/>
                                <h6 className="report-date">Published on: <span >{singleBlog[0].creation_date}</span></h6>
                            </div>
                            <div className="report-box">
                                <img src="../images/last-update.svg" alt=""/>
                                <h6 className="report-date">Last updated on: <span > {singleBlog[0].updation_date}</span></h6>
                            </div>
                            <div className="report-box">
                                <h6 className="report-date">Word Count:  <span >1500</span></h6>
                            </div>
                            <div className="report-box">
                                <img src="../images/eye.svg" alt=""/>
                                <h6 className="report-date"><span >{singleBlog[0].readingtime}</span></h6>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
         
            <section className="article-det">
                <div className="article-wrap">
                    <div className="col-5">
                        <div className="article-left article-stick">
                           
                            <div className="article-media">
                                <h4>Share this article</h4>
                               
                                <div className="icons">
                                    <a className="social-icons" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#1DA1F2"  class="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/> </svg></a>
                                    <a className="social-icons"  href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#0077b5" class="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg></a>
                                    <a className="social-icons"  href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#316FF6" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> </svg></a>
                                </div>
                            </div>
                           
                            <div className="struggling-box">
                                <h3>Struggling With your essay</h3>
                                <img className="struggle-img" src="../images/struggle.png" alt=""/>
                                <h4>Top-className Writter are here!</h4>
                                <a className="strug-btn" href="#">Get Started</a>
                            </div>
                           
                            <div className="people-read">
                                <h4>People also read</h4>
                                <div className="read-box">
                                    <img className="readbox-img" src="../images/publish-icon.svg" alt=""/>
                                    <Link className='Link' to={`/blog/${singleBlog[2][0].blog_single_title}`}>
                                    <span>{singleBlog[2][0].blogtitle}</span>
                                   </Link>
                                   
                                </div>
                                <div className="read-box">
                                    <img className="readbox-img" src="../images/publish-icon.svg" alt=""/>
                                    <Link className='Link' to={`/blog/${singleBlog[2][1].blog_single_title}`}>
                                    <span>{singleBlog[2][1].blogtitle}</span>
                                   </Link>
                                   
                                </div>
                                <div className="read-box">
                                    <img className="readbox-img" src="../images/publish-icon.svg" alt=""/>
                                    <Link className='Link' to={`/blog/${singleBlog[2][2].blog_single_title}`}>
                                      <span>{singleBlog[2][2].blogtitle}</span>
                                   </Link>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-7">
                        <div className="article-right">
                            {/* <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                            <h3>How Do You Write a Phd Essay?</h3>
                            <p>There are a few general things to keep in mind when writing a Ph.D. essay. First, your essay should be clear and concise. It should get straight to the point without beating around the bush. Your main point should be well-defined. Second, you need to make sure that your essay is well-organized and flows smoothly from start to finish. </p>
                            <p>All paragraphs should be connected in some logical manner and should sound coherent. Lastly, your essay should be free of errors. Errors can be grammatical, structural, and factual. You need to ensure that all types of errors are removed from your essay. With these general things in mind, let's take a closer look at how to write a Ph.D. essay step by step.</p>
                            <h3>Have a Strong Personal Statement</h3>
                            <span>Your PhD essay should contain a strong personal statement. A personal statement should be personal and should showcase your unique strengths and accomplishments. Ideally, it should answer questions such as:</span>
                            <ul className="article-list">
                                <li>Why do you want to complete further research in this field?</li>
                                <li>Why have you chosen to apply to this particular university?</li>
                            </ul> */}
                          
                            <div className="article-inner">
                              <div dangerouslySetInnerHTML={{ __html: singleBlog[0].blogtext }} />
                               
                            </div>
                           
                        </div>
                        <div className="arthor-bio">
                            <h4>Author’s Bio</h4>
                             <p> {singleBlog[0].authorbio}</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </div>

        </>

    )
}

export default SingleBlog
