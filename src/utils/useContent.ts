import content from '../data/content.json';

export default function useContent(key: string) {
    // parse key if has . in it
    if (key.includes('.')) {
        const keys = key.split('.');
        return keys.reduce((prev: any, curr) => {
            return (prev)[curr];
        }, content);
    }
    return (content as any)[key];
}