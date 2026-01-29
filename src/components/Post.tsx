import type { PostProps } from '../types';
import styles from './Post.module.css';

const Post = ({post}: PostProps) => {

    return(
        <article className={styles.Post}>
            <h2>{post.title}</h2>
            <img src={post.imageUrl} alt="" />
            <p>{post.description}</p>
            <p>{post.date}</p>
            <p>Tags: {post.tags?.map(tag => <a key={tag} className={styles.tag} href='#'>{tag}</a>)}</p>
        </article>
    )
}

export default Post;