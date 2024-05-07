import Swup from '../Swup';
import { PageData } from './getPageData';
export interface PageRecord extends PageData {
    url: string;
    responseURL: string;
}
export declare class Cache {
    pages: Record<string, PageRecord>;
    last: PageRecord | null;
    swup: Swup;
    constructor(swup: Swup);
    getCacheUrl(url: string): string;
    cacheUrl(page: PageRecord): void;
    getPage(url: string): PageRecord;
    getCurrentPage(): PageRecord;
    exists(url: string): boolean;
    empty(): void;
    remove(url: string): void;
}
