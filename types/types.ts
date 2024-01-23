import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    containedStyles?: string,
    handleClick: MouseEventHandler<HTMLButtonElement>
}