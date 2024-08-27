import { icons } from "lucide-preact";

export type NavLink = {
    title: string;
    link: string;
}

export type Service = {
    icon: keyof typeof icons;
    title: string;
    description: string;
}