import React from 'react'
import classes from './featuredBlogs.module.css'
import mountainImg1 from '../../assets/mountain1.jpg'
import mountainImg2 from '../../assets/mountain2.jpg'
import {MdOutlinePreview} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'

const FeaturedBlogs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>Featured Blogs</h3>
        <div className={classes.blogs}>
          <div className={classes.left}>
            <div className={classes.mainBlog}>
              <img src={mountainImg1} alt="" />
              <div className={classes.mainBlogData}>
                <div className={classes.categoryAndMetadata}>
                  <span className={classes.category}>Nature</span>
                  <div className={classes.metadata}>
                    <MdOutlinePreview /> 123 views
                  </div>
                  <div className={classes.metadata}>
                    <AiFillLike /> 100 likes
                  </div>
                </div>
                <h4>IT's My Nature</h4>
                <p className={classes.blogDesc}>
                Mother Nature is the ultimate inspiration. When you're feeling sluggish, simply walking outside and getting fresh air can do wonders for your mood and outlook. 
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Amrutha</span>
                  <span><span>Created:</span>05-07-2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.secondaryBlog}>
              <img src={mountainImg2} alt="" />
              <div className={classes.secondaryBlogData}>
                <h4>Nature Love</h4>
                <p className={classes.desc}>
                Nature is not a place to visit, it is home
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Amrutha</span>
                  <span><span>Created:</span> 05-07-2023</span>
                </div>
              </div>
            </div>
            <div className={classes.secondaryBlog}>
              <img src={mountainImg2} alt="" />
              <div className={classes.secondaryBlogData}>
                <h4>Beauty Of Nature</h4>
                <p className={classes.desc}>
                Some old-fashioned things like fresh air and sunshine are hard to beat.
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Amrutha</span>
                  <span><span>Created:</span> 05-07-2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogs