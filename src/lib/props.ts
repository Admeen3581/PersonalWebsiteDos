/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved
 */

//Imports
import {LucideIcon} from "lucide-react";


export interface NavBarProps {
    title: string,
    href: string,
    desc: string,
}

export interface PhilosophyProps {
    icon : LucideIcon,
    title : string,
    desc : string,
}

export interface InterestProps {
    variant : number,
    title : string,
    desc : string,
    imgRef : string,
    imgRef2? : string,
    imgRef3? : string,
    imgAlt? : string,
}

export interface WhoAmIProps {
    title: string,
    href?: string,
    desc: string
}

export interface ContactProps {
    href : string,
    icon : string,
    title : string,
}

export interface DownloadProps {
    title : string,
    link : string,
}

export interface GalleryProps {
    title : string,
    desc : string,
    imgRef : string,
    imgAlt? : string,
}

export interface BlogProps {
    id: number,
    title: string,
    desc: string,
    date: string,
    imgRef: string,
    content: string
}

export interface ExperienceProps {
    company: string,
    role: string,
    duration: string,
    description: string,
    imgRef: string,
}