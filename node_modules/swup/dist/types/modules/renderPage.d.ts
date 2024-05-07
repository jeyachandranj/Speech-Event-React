import Swup from '../Swup';
import { PageRecord } from './Cache';
export type PageRenderOptions = {
    event?: PopStateEvent;
    skipTransition?: boolean;
};
export declare const renderPage: (this: Swup, page: PageRecord, { event, skipTransition }?: PageRenderOptions) => void;
