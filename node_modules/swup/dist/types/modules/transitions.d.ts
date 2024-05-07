import Swup from '../Swup';
export declare function updateTransition(this: Swup, from: string, to: string, custom?: string): void;
export declare function shouldSkipTransition(this: Swup, { event }: {
    url?: string;
    event?: Event;
}): boolean;
