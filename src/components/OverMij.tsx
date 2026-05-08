import ProfileSection from './ProfileSection';
import StageSection from './StageSection';
import styles from './OverMij.module.css';

const OverMij = () => {
    return (
        <main className={styles.OverMij}>
            <ProfileSection />
            <StageSection />
        </main>
    );
};

export default OverMij;
