import React from 'react'
import './singleBlogSkeleton.css'

const SingleBlogSkeleton = () => {
    return (
        <div class="blog-card2">
            <div class="big-blog-Img2">
                <div class='list-card-img-placeholder1'></div>
            </div>
            <div class="big-blog-desc list-card1">
                <p class="category-placeholder1"></p>
                <h2 class='list-card-head title-placeholder1'></h2>
                <div class="blog-info">
                    <div class="info-left1">
                        <p class="date-placeholder1"></p>
                    </div>
                    <div class="info-right">
                        <div class="icon-placeholder1"></div>
                        <p class="reading-time-placeholder1"></p>
                    </div>
                </div>
                <div class="blog-tags-list-card1">
                    <div class="blog-all-tags list-card-tage1">
                        <p class="tag-placeholder1"></p>
                        <p class="tag-placeholder1"></p>
                        <p class="tag-placeholder1"></p>
                    </div>
                </div>
                <div class="list-read-more-button1">
                    <button disabled>Loading...</button>
                </div>
            </div>
        </div>
    )
}

export default SingleBlogSkeleton