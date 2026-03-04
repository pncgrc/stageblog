import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { PostProps } from '../types';
import styles from './Post.module.css';

const Post = ({post}: PostProps) => {

    return(
        <article className={styles.Post}>
            <h2>{post.title}</h2>
            <img src={post.imageUrl} alt="" />
            <p>{documentToReactComponents(post.description)}</p>
            <p>{post.date}</p>
            <p>Tags: {post.tags}</p>
        </article>
    )
}

export default Post;