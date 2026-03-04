import { useEffect, useState } from 'react';
import data from '../data/posts.json';
import type { IPost } from '../types';
import Post from './Post';
import { getBlogPosts } from '../hooks/useBlogposts';

const PostList = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

     useEffect(() => {
        setLoading(true)
        getBlogPosts()
        .then(setPosts)
        .catch(console.error)
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;

    return(
        <>
            {posts.map(p => <Post key={p.id} post={p} />)}
        </>
    )
}

export default PostList;