'use client';

import { CustomButtonProps } from "@/types/types";
import Image from "next/image";

const CustomButton = ({title, btnType, containedStyles, handleClick} : CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containedStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>{title}</span>
        </button>
    )
}

export default CustomButton;

