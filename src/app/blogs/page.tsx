"use client"
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";

const AllBlogsPage =  () => {
    // const res = await fetch("http://localhost:5000/blogs",{
    //     cache:"no-store" 
    // })
    // const blogs: TBlog[] = await res.json()

    const {data:blogs,isError,isLoading,error} = useGetBlogsQuery(undefined)
    console.log(blogs);
    return (
        <div>
            <h1 className="text-center text-4xl my-5">All Blogs From <span className='text-accent'>Blogiz</span></h1>
            <p className='text-center text-xl text-gray-400 italic w-2/4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita at eligendi ducimus! Id quisquam magni repudiandae qui aliquid quis inventore ad dolorum, exercitationem excepturi!</p>
            <div className="grid grid-cols-3 gap-4 w-[90%] mx-auto my-5">
                {
                    blogs?.map((blog:TBlog) => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogsPage;