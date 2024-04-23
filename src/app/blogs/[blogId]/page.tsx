import BlogDetails from "@/components/ui/BlogDetails";


export const generateStaticParams = async () => {
    const res = await fetch(`http://localhost:5000/blogs`);
    const blogs: TBlog[] = await res.json();
    return blogs.map(blog => ({
        blogId: blog.id
    }))
}

interface TBlogId {
    params: {
        blogId: string
    }
}

const BlogDetailsPage = async ({ params }: TBlogId) => {
    console.log(`rendaring with id ${params.blogId}`);
    const blog = await (await fetch(`http://localhost:5000/blogs/${params.blogId}`)).json();
    return (
        <div>
            <BlogDetails blog={blog}></BlogDetails>
        </div>
    );
};

export default BlogDetailsPage;