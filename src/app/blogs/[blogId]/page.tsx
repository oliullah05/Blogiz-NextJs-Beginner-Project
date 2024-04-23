import BlogDetails from "@/components/ui/BlogDetails";
interface TBlogId {
    params: {
        blogId: string
    }
}

export const generateStaticParams = async () => {
    const res = await fetch(`http://localhost:5000/blogs`);
    const blogs: TBlog[] = await res.json();
    return blogs.map(blog => ({
        blogId: blog.id
    }))
}


const BlogDetailsPage = async ({ params }: TBlogId) => {
    const blog = await (await fetch(`http://localhost:5000/blogs/${params.blogId}`)).json();
    return (
        <div>
            <BlogDetails blog={blog}></BlogDetails>
        </div>
    );
};

export default BlogDetailsPage;