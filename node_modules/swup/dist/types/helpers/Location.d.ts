/**
 * A helper for creating a Location from either an element
 * or a URL object/string
 *
 */
export declare class Location extends URL {
    constructor(url: string, base?: string);
    get url(): string;
    /**
     * Instantiate a Location from an element's href attribute
     * @param {Element} el
     * @return new Location instance
     */
    static fromElement(el: HTMLAnchorElement): Location;
    /**
     * Instantiate a Location from a URL object or string
     * @param {URL|string} url
     * @return new Location instance
     */
    static fromUrl(url: string): Location;
}
