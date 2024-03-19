import styles from "@/components/SkillTile.module.css";

interface ISkillTileProps {
    label: string;
    bgColour?: string;
}

export default function SkillTile({ label, bgColour = undefined }: ISkillTileProps) {
    return (
        <div
            className={styles.skillTile}
            style={
                bgColour === undefined
                    ? { backgroundColor: "#".concat(Math.floor(Math.random() * 16777215).toString(16)) }
                    : { backgroundColor: bgColour }
            }
        >
            <p>{label}</p>
        </div>
    );
}
