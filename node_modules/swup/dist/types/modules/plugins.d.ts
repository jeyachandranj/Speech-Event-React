import Swup from '../Swup';
export type Plugin = {
    name: string;
    isSwupPlugin: true;
    mount: () => void;
    unmount: () => void;
    swup?: Swup;
    version?: string;
    requires?: Record<string, string>;
    _beforeMount?: () => void;
    _afterUnmount?: () => void;
    _checkRequirements?: () => boolean;
};
export declare const use: (this: Swup, plugin: unknown) => Plugin[] | undefined;
export declare function unuse(this: Swup, pluginOrName: Plugin | string): Plugin[] | undefined;
export declare function findPlugin(this: Swup, pluginOrName: Plugin | string): Plugin | undefined;
