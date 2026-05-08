import { Link } from 'react-router-dom';
import LatestPost from './LatestPost';
import styles from './Home.module.css';

const Home = () => {
    return (
        <main className={styles.Home}>

            <section className={styles.hero}>
                <h1>Mijn stage bij jstack</h1>
                <p>
                    Welkom op mijn stageblog. Via deze website volg je mijn traject als full stack developer bij{' '}
                    <a href="https://jstack.eu/" target="_blank" rel="noreferrer">jstack</a>, onderdeel van{' '}
                    <a href="https://www.cronos-groep.be" target="_blank" rel="noreferrer">De Cronos Groep</a>.
                    Tijdens mijn stage werk ik mee aan <strong>Reacher</strong>, een prospectieplatform op maat voor
                    Huntsmen dat ontwikkeld wordt met een sterke focus op AI-driven development. Op deze blog deel ik
                    wekelijks mijn ervaringen, technische uitdagingen, inzichten en groei als developer binnen een
                    professionele softwareomgeving.
                </p>
                <p>
                    Deze website geeft niet alleen een overzicht van mijn stage-ervaring, maar toont ook hoe moderne
                    softwareontwikkeling vandaag evolueert dankzij AI, automatisatie en efficiënte development
                    workflows. Je leest hier hoe features worden gebouwd, hoe code reviews verlopen, welke problemen
                    ik onderweg tegenkom en wat ik leer uit echte praktijkervaring binnen een developmentteam.
                </p>
                <Link to="/blog" className={styles.ctaButton}>Lees de blogposts →</Link>
            </section>

            <section className={styles.about}>
                <h2>Over jstack</h2>
                <p>
                    Jstack specialiseert zich in AI-driven softwareontwikkeling en helpt bedrijven bij het bouwen van
                    snelle, schaalbare en betaalbare software op maat. Door artificiële intelligentie slim te combineren
                    met menselijke expertise ontwikkelt het bedrijf applicaties die volledig aansluiten bij de processen
                    en noden van klanten. Hun aanpak focust op snelheid, flexibiliteit en kwaliteit, zonder de hoge
                    licentiekosten en beperkingen van klassieke SaaS-oplossingen.
                </p>
            </section>

            <section className={styles.about}>
                <h2>Over Reacher</h2>
                <p>
                    Tijdens mijn stage werk ik mee aan <strong>Reacher</strong>, een prospectieplatform dat ontwikkeld
                    werd voor Huntsmen. Het platform centraliseert prospectielijsten, leadopvolging, KPI-tracking,
                    rapportering en campagnebeheer in één geïntegreerd systeem. Reacher werd ontwikkeld omdat het vorige
                    CRM-systeem niet langer aansloot bij de dagelijkse werking van Huntsmen, waar consultants met grote
                    hoeveelheden prospectiedata en meerdere campagnes tegelijk werken.
                </p>
                <p>
                    Binnen dit project werk ik als full stack developer aan nieuwe functionaliteiten, verbeteringen aan
                    bestaande features en optimalisaties binnen de codebase. Daarbij maak ik gebruik van technologieën
                    zoals Next.js, TypeScript, Fastify, PostgreSQL en Prisma.
                </p>
            </section>

            <LatestPost />

        </main>
    );
};

export default Home;
