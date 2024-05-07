import { TransitionOptions } from '../modules/loadPage';
import { Options } from '../Swup';
export declare const fetch: (options: TransitionOptions & {
    headers: Options['requestHeaders'];
}, callback: (request: XMLHttpRequest) => void) => XMLHttpRequest;
