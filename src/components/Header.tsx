import styles from './Header.module.css';

const Header = () => {

    return(
        <header className={styles.Header}>
            <div className={styles.headerContainer}>
                <a href="#"><h1>Ponci's stage</h1></a>
            </div>
        </header>
    );
}

export default Header;