import PostList from './PostList';
import BackToTopButton from './BackToTopButton';
import styles from './Main.module.css';

const Main = () => {

    return(
        <main className={styles.Main}>
            <PostList />
            <BackToTopButton />
        </main>
    )
}

export default Main;