/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import { blogElements } from '../blogElements';

export default function BlogPost({ params }: { params: { id: string } })
{
    const { id } = params;

    if (!id) {
        return <div>Invalid or missing blog ID</div>;
    }

    // Find the blog post based on the ID
    const blog = blogElements.find((post) => post.id === parseInt(id));

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div>
            <h1>{blog.title}</h1>
            <img src={blog.imgRef} alt={blog.title} />
            <p>{blog.date}</p>
            <div>{blog.content}</div>
        </div>
    );
}