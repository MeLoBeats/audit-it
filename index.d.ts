import  type { icons } from "lucide-react"; 

export type NavLink = {
    title: string;
    link: string;
}

export type Service = {
    icon: icons;
    title: string;
    description: string;
}

export type Formation = {
    title: string;
    description: string;
    tags: string[];
    level: string;
    duration: string;
    longDescription: string;
    summary: string[];
    faq: Faq[];
}

export type Faq = {
    question: string;
    answer: string;
}