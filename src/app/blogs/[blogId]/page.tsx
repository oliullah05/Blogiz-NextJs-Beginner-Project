import BlogDetails from "@/components/ui/BlogDetails";

interface TBlogId  {
params:{
    blogId:string
}
}

const BlogDetailsPage = async({params}:TBlogId) => {
    const blog = await (await fetch(`http://localhost:5000/blogs/${params.blogId}`,{cache:"no-store"})).json();
    return (
        <div>
            <BlogDetails blog={blog}></BlogDetails>
        </div>
    );
};

export default BlogDetailsPage;