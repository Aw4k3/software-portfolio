import Button from "@/components/Button";
import styles from "./page.module.css";
import SkillTile from "@/components/SkillTile";
import GitHubLogo from "@/assets/github-mark/github-mark-white.svg";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.landingSection}>
                <h1>Hello there!</h1>
                <h2>I am a full stack web developer. <span style={{fontSize: "1.5rem"}}>🌎</span></h2>
                <p>I am also a photographer in my spare time. <span style={{fontSize: "1.5rem"}}>📸</span></p>
            </section>
            <section>
                <h2 className={styles.centredSubtitle}>Who am I?</h2>
                <p>
                    Hello, I am a full stack web developer with 2 years
                    experience. I have a passion for creating elegant, reliable
                    and responsive web apps I have a deep understaning of HTML,
                    CSS and JavaScript, and I am also very familiar with
                    frameworks/libraries such a React and Nextjs.
                </p>
            </section>
            <section className={styles.centredSubtitle}>
                <h2>Skills</h2>
                <div className={styles.skillTiles}>
                    <SkillTile label="HTML5" bgColour="#de6427" />
                    <SkillTile label="CSS3" bgColour="#518bd6" />
                    <SkillTile label="Javascript" bgColour="#f0db4f" />
                    <SkillTile label="Node.js" bgColour="#4abc17" />
                    <SkillTile label="SQL" bgColour="#f22387" />
                    <SkillTile label="MongoDB" bgColour="#4100ff" />
                    <SkillTile label="Git" bgColour="#2e0d72" />
                    <SkillTile label="UI/UX" bgColour="#8bbc75" />
                    <SkillTile label="Responsive Design" bgColour="#fe8117" />
                    <SkillTile label="Testing" bgColour="#3b27de" />
                    <SkillTile label="Debugging" bgColour="#3b27de" />
                    <SkillTile label="Deploying" bgColour="#b947a5" />
                    <SkillTile label="Hosting" bgColour="#f4b3bf" />
                </div>
            </section>
            <section className={styles.projectCards}>
                <h2 className={styles.centredSubtitle}>Projects</h2>
                <div className={styles.projectCard}>
                    <h3>FakeAwake</h3>
                    <p>Technologies: Node, JavaScript, TypeScript</p>
                    <p>
                        A personal project where I developed a Discord bot and
                        then further developed to also be a Twitch bot. Through
                        out this project I improved my understanding of
                        JavaScript and TypeScript enormously. I have been
                        working on this project on and off for 3 years now.
                    </p>
                    <Button imageUri={GitHubLogo} label="GitHub" />
                </div>
                <div className={styles.projectCard}>
                    <h3>Recipes For Disaster</h3>
                    <p>Technologies: PHP</p>
                    <p>
                        A university assignment project to get us started on
                        dynamic web pages. This taught me the basics of
                        developing dynamic web pages and database driven
                        developement. This also taught me MVC.
                    </p>
                    <Button imageUri={GitHubLogo} label="GitHub" />
                </div>
                <div className={styles.projectCard}>
                    <h3>Diary Logger</h3>
                    <p>Technologies: Jetpack Compose, Kotlin</p>
                    <p>
                        Another university assignment that taught us how to
                        develop android applications using Google&apos;s Jetpack
                        Compose. I learnt how to use Kotlin and design material
                        UIs.
                    </p>
                    <Button imageUri={GitHubLogo} label="GitHub" />
                </div>
            </section>
        </main>
    );
}
