import LoadingCard from "@/components/ui/LoadingCard";

const BlogLoadingPage = async () => {
    const res = await fetch("http://localhost:5000/blogs")
    const blogs: TBlog[] = await res.json()
    return (
        <div>
            <h1 className="text-9xl text-center text-red-500">Loading............................</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    blogs.map(blog => <LoadingCard key={blog.id}></LoadingCard>
                    )
                }
            </div>
        </div>
    );
};

export default BlogLoadingPage;
