export declare const query: (selector: string, context?: Document | Element) => HTMLElement | null;
export declare const queryAll: (selector: string, context?: Document | Element) => HTMLElement[];
export declare const nextTick: (callback: () => void) => void;
export declare const escapeCssIdentifier: (ident: string) => string;
export declare const toMs: (s: string) => number;
