import React from 'react';
import LatestBlogCard from '../ui/LatestBlogCard';
import BlogCard from '../ui/BlogCard';

const LatestBlogs = ({blogs}:{blogs:TBlog[]}) => {
    return (
        <div>
            <h1 className="text-center text-4xl my-5">Latest Blogs From <span className='text-accent'>Blogiz</span></h1>
            <p className='text-center text-xl text-gray-400 italic w-2/4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita at eligendi ducimus! Id quisquam magni repudiandae qui aliquid quis inventore ad dolorum, exercitationem excepturi!</p>

            <div className='grid grid-cols-2 gap-4 w-[80%] mx-auto mt-9'>
                {
                    blogs.slice(0,2).map(blog=><LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>
                    )
                }
            </div>
            <div className='grid grid-cols-3 gap-4 w-[80%] mx-auto mt-9'>
                {
                    blogs.slice(2,5).map(blog=><BlogCard key={blog.id} blog={blog}></BlogCard>
                    )
                }
            </div>
        </div>
    );
};

export default LatestBlogs;