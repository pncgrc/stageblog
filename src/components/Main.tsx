import PostList from './PostList';
import styles from './Main.module.css';

const Main = () => {

    return(
        <main className={styles.Main}>
            <PostList />
        </main>
    )
}

export default Main;