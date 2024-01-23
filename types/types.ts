import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    btnType?: "button" | "submit",
    containedStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
}