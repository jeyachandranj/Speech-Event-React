import Swup from '../Swup';
import { PageHtmlData } from '../helpers/getDataFromHtml';
export type PageData = PageHtmlData & {
    responseURL: string;
};
export declare const getPageData: (this: Swup, request: XMLHttpRequest) => PageData | null;
