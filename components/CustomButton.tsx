'use client';

import { CustomButtonProps } from "@/types/types";
import Image from "next/image";

const CustomButton = ({title, containedStyles, handleClick} : CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type="button"
            className={`custom-btn ${containedStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>{title}</span>
        </button>
    )
}

export default CustomButton;

