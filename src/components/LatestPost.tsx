import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getBlogPosts } from '../hooks/useBlogposts';
import type { IPost } from '../types';
import { formatDate } from '../helpers/formatDate';
import styles from './LatestPost.module.css';

const LatestPost = () => {
    const [latestPost, setLatestPost] = useState<IPost | null>(null);

    useEffect(() => {
        getBlogPosts()
            .then(posts => setLatestPost(posts[0] ?? null))
            .catch(console.error);
    }, []);

    if (!latestPost) return null;

    return (
        <section className={styles.latest}>
            <h2>Nieuwste blogpost</h2>
            <article className={`${styles.latestCard} ${!latestPost.imageUrl ? styles.latestCardNoImage : ''}`}>
                {latestPost.imageUrl && (
                    <img src={latestPost.imageUrl} alt="" className={styles.latestImage} />
                )}
                <div className={styles.latestContent}>
                    <p className={styles.latestDate}>{formatDate(latestPost.date)}</p>
                    <h3>{latestPost.title}</h3>
                    <div className={styles.latestExcerpt}>
                        {documentToReactComponents(latestPost.description)}
                    </div>
                    <Link to="/blog" className={styles.readMore}>Alle posts lezen →</Link>
                </div>
            </article>
        </section>
    );
};

export default LatestPost;
