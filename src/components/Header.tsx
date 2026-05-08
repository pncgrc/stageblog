import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {

    return(
        <header className={styles.Header}>
            <div className={styles.headerContainer}>
                <Link to="/"><h1>Ponci's stage</h1></Link>
                <nav className={styles.nav}>
                    <Link to="/">Home</Link>
                    <Link to="/over-mij">Over mij</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;