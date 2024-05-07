import Swup from '../Swup';
export declare function getAnimationPromises(this: Swup, animationType: 'in' | 'out'): Promise<void>[];
export declare function getTransitionInfo(element: Element, expectedType?: 'animation' | 'transition' | null): {
    type: string | null;
    timeout: number;
    propCount: number;
};
