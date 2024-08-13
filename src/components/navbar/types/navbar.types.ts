import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface linkTypes {
    href: string,
    label: String,
    icon?:  ReactNode | null,
    image?: StaticImageData | null,
    onClickHandler?: (...args: any) => void;
}