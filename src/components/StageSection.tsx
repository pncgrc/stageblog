import styles from './StageSection.module.css';

const StageSection = () => {
    const reacherTechStack: string[] = ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Fastify', 'PostgreSQL', 'Prisma'];

    return (
        <section className={styles.stage}>
            <h2>Stagebedrijf</h2>
            <p>
                Mijn stage loop ik bij{' '}
                <a href="https://jstack.eu/" target="_blank" rel="noreferrer">jstack</a>{' '}
                in Kontich, een bedrijf binnen{' '}
                <a href="https://www.cronos-groep.be" target="_blank" rel="noreferrer">De Cronos Groep</a>.
                Jstack specialiseert zich in AI-driven development en positioneert zich als digitale partner voor
                bedrijven die nood hebben aan snelle en betaalbare software op maat. Door artificiële intelligentie
                slim te combineren met menselijke expertise ontwikkelt het bedrijf applicaties sneller en efficiënter,
                zonder in te boeten op kwaliteit of betrouwbaarheid. Hun aanpak focust op maatwerksoftware,
                workflowautomatisatie en AI-oplossingen die volledig aansluiten bij de processen van de klant.
            </p>

            <div className={styles.divider} />

            <h3>Mijn rol</h3>
            <p>
                Tijdens mijn stage werk ik als full stack developer mee aan <strong>Reacher</strong>, een
                prospectieplatform op maat voor Huntsmen. Mijn verantwoordelijkheden bestaan uit het ontwikkelen van
                nieuwe functionaliteiten op basis van klantenvragen, het verbeteren van bestaande features en het
                optimaliseren van de codebase.
            </p>
            <p>
                Ik werk binnen één developmentteam en maak gebruik van moderne technologieën zoals Next.js 15,
                TypeScript, Tailwind CSS, Fastify, PostgreSQL en Prisma. Dankzij deze stage krijg ik de kans om
                praktijkervaring op te doen binnen een professionele ontwikkelomgeving en mijn technische,
                analytische en UX-gerichte vaardigheden verder uit te bouwen.
            </p>

            <h3>Gebruikte tech stack</h3>
            <div className={styles.techStack}>
                {reacherTechStack.map(tech => (
                    <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
            </div>
        </section>
    );
};

export default StageSection;
