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
    // getting current url of blog
    const shareUrl = "https://myperfectwriting.co.uk/blog/Online-Education-and-the-Rise-of-Remote-Learning";

    const [singleBlog, setSingleBlog] = useState();
    const [loading, setLoading] = useState(true);

    const decodedTitle = decodeURIComponent(title.replace(/-/g, ' '));


    useEffect(() => {
        const apiUrl = `https://myperfectwriting.co.uk/mpwblogportal/controller/blogs.php?action=getBlogByTitle&title=${decodedTitle}`;

        axios.get(apiUrl)
            .then((response) => {
                const data = response.data; // Extract the array of client data
                setSingleBlog(data);
                console.log("data", data);
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

   

    return (
        <>
            <Helmet>
                <title>{singleBlog[0].pagetitle}</title>
                <meta name="description" content={singleBlog[0].metadescription} />


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
                    <h2>BUSINESS</h2>
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
                                    <a className="social-icons" href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a className="social-icons"  href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a className="social-icons"  href="#"><i className="fa-brands fa-facebook-f"></i></a>
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
                                    <Link className='Link' to={`http://localhost:3000/blog/${singleBlog[2][0].blog_single_title}`}>
                                    <span>{singleBlog[2][0].blogtitle}</span>
                                   </Link>
                                   
                                </div>
                                <div className="read-box">
                                    <img className="readbox-img" src="../images/publish-icon.svg" alt=""/>
                                    <Link className='Link' to={`http://localhost:3000/blog/${singleBlog[2][1].blog_single_title}`}>
                                    <span>{singleBlog[2][1].blogtitle}</span>
                                   </Link>
                                   
                                </div>
                                <div className="read-box">
                                    <img className="readbox-img" src="../images/publish-icon.svg" alt=""/>
                                    <Link className='Link' to={`http://localhost:3000/blog/${singleBlog[2][2].blog_single_title}`}>
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