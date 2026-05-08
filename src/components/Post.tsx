import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { PostProps } from '../types';
import { formatDate } from '../helpers/formatDate';
import styles from './Post.module.css';

const Post = ({post}: PostProps) => {

    return(
        <article className={styles.Post}>
            <div className={styles.postHeader}>
                <h2>{post.title}</h2>
                <p className={styles.date}>{formatDate(post.date)}</p>
            </div>
            <img src={post.imageUrl} alt="" />
            <div>{documentToReactComponents(post.description)}</div>
            <p>Tags: {post.tags}</p>
        </article>
    )
}

export default Post;