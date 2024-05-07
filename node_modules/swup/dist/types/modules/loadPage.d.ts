import Swup from '../Swup';
export type TransitionOptions = {
    url: string;
    customTransition?: string;
};
export type PageLoadOptions = {
    url: string;
    event?: PopStateEvent;
    customTransition?: string;
};
export declare function loadPage(this: Swup, data: TransitionOptions): void;
export declare function performPageLoad(this: Swup, data: PageLoadOptions): void;
