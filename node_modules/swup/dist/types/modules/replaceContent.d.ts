/**
 * Perform the replacement of content after loading a page.
 *
 * This method can be replaced or augmented by plugins to allow pausing.
 *
 * It takes an object with the page data as return from `getPageData` and has to
 * return a Promise that resolves once all content has been replaced and the
 * site is ready to start animating in the new page.
 *
 * @param {object} page The page object
 * @returns Promise
 */
export declare const replaceContent: ({ blocks, title }: {
    blocks: string[];
    title: string;
}) => Promise<void>;
