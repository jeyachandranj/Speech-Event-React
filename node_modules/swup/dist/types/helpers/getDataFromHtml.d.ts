export type PageHtmlData = {
    title: string;
    originalContent: string;
    blocks: string[];
    pageClass?: string;
};
export declare const getDataFromHtml: (html: string, containers: string[]) => PageHtmlData;
