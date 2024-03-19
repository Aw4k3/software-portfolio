import Image from "next/image";
import styles from "./Button.module.css";
import { MouseEventHandler } from "react";

interface IButtonProps {
    imageUri?: string;
    iconUri?: string;
    label: string;
    onClick?: MouseEventHandler;
}

export default function Button({ imageUri = "", iconUri = "", label, onClick = undefined }: IButtonProps) {
    return (
        <button className={styles.buttonBase} onClick={onClick}>
            {imageUri !== "" ? <Image src={imageUri} alt={label} width={20} height={20} /> : undefined}
            <p>{label}</p>
        </button>
    );
}
