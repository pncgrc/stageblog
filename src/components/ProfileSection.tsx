import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './ProfileSection.module.css';

const ProfileSection = () => {
    return (
        <section className={styles.profile}>
            <div className={styles.photoWrapper}>
                <div className={styles.photoPlaceholder}>PG</div>
            </div>
            <div className={styles.bio}>
                <h1>Over mij</h1>
                <p>
                    Mijn naam is <strong>Ponci Garcia</strong> en ik ben een student Graduaat Programmeren die zijn
                    opleiding combineert met een voltijdse job in avondonderwijs. Dankzij die combinatie heb ik niet
                    alleen technische kennis opgebouwd, maar ook sterke discipline, zelfstandigheid en
                    doorzettingsvermogen ontwikkeld.
                </p>
                <p>
                    Ik studeer af met hoge onderscheiding en heb een sterke interesse in analyse, UX en het bouwen
                    van full stack applicaties die zowel technisch performant als gebruiksvriendelijk zijn. Daarnaast
                    interesseren games en triatlon mij sterk. Mijn grootste sterktes liggen in data-analyse, data
                    querying en UI/UX. Mijn ambitie is om mijn technische en analytische vaardigheden verder te
                    ontwikkelen om uit te groeien tot een zo sterk mogelijke developer.
                </p>
                <div className={styles.links}>
                    <a href="https://www.linkedin.com/in/pncn-grc" target="_blank" rel="noreferrer" className={styles.linkBadge}>
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/pncgrc" target="_blank" rel="noreferrer" className={styles.linkBadge}>
                        <FaGithub /> GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
