import data from '../data/posts.json';
import type { IPost } from '../types';
import Post from './Post';

const PostList = () => {
    return(
        <>
            {[...(data ?? [])].reverse().map((post: IPost) => <Post key={post.id} post={post}/>)}
        </>
    )
}

export default PostList;